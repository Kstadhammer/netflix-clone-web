import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { logout } from '../../services/auth';

const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ isScrolled }) =>
    isScrolled ? '#141414' : 'transparent'};
  transition: background-color 0.3s;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 25px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #e5e5e5;
  transition: color 0.3s;
  font-size: 14px;

  &:hover {
    color: #b3b3b3;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f40612;
  }
`;

const ProfileButton = styled.div`
  position: relative;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #404040;
  border-radius: 4px;
  padding: 10px 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 200px;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <Nav isScrolled={isScrolled}>
      <Link to="/">
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browse">TV Shows</NavLink>
        <NavLink to="/browse">Movies</NavLink>
        <NavLink to="/browse">New & Popular</NavLink>
        <NavLink to="/browse">My List</NavLink>
      </NavLinks>
      <AuthContainer>
        {currentUser ? (
          <ProfileButton onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <ProfileImg
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Profile"
            />
            <DropdownMenu isOpen={isDropdownOpen}>
              <MenuItem onClick={() => navigate('/profile')}>Account</MenuItem>
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </DropdownMenu>
          </ProfileButton>
        ) : (
          <>
            <NavLink to="/login">
              <Button>Sign In</Button>
            </NavLink>
            <NavLink to="/signup">
              <Button>Sign Up</Button>
            </NavLink>
          </>
        )}
      </AuthContainer>
    </Nav>
  );
};

export default Navbar;
