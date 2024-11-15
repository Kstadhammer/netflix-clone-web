import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUp } from '../services/auth';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  padding: 60px 68px 40px;
  min-height: 515px;
  max-width: 450px;
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 16px 20px;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  height: 50px;

  &:focus {
    outline: none;
    background-color: #454545;
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;

const Button = styled.button`
  padding: 16px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f40612;
  }
`;

const Error = styled.div`
  color: #e87c03;
  margin-bottom: 16px;
`;

const LoginLink = styled.p`
  color: #737373;
  margin-top: 16px;
  font-size: 16px;

  a {
    color: white;
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await signUp(email, password);
    if ('message' in result) {
      setError(result.message);
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        {error && <Error>{error}</Error>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <LoginLink>
          Already have an account?
          <a href="/login">Sign in now</a>
        </LoginLink>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
