import styled from "styled-components";

import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(img/beorganiic.jpg) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 40px;
  width: 30%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: teal;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;
  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }


  
`;

const Link = styled.a`
  margin-top: 10px;
  font-size: 14px;
  color: teal;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled.span`
  color: red; 
  `;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user)


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password, });


  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}  disabled = {isFetching}>Log In</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
