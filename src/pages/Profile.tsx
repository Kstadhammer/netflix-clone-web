import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../services/auth';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #141414;
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  border-bottom: 1px solid #282828;
  padding-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

const Info = styled.div`
  flex: 1;
`;

const Email = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f40612;
  }
`;

const MembershipSection = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #282828;
`;

const MembershipTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Profile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <Container>
      <ProfileContainer>
        <Title>Account</Title>
        <Content>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile Avatar"
          />
          <Info>
            <Email>{currentUser?.email}</Email>
            <Button onClick={handleLogout}>Sign Out</Button>
          </Info>
        </Content>
        <MembershipSection>
          <MembershipTitle>Plan Details</MembershipTitle>
          <Email>Premium Plan</Email>
          <Button>Change Plan</Button>
        </MembershipSection>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
