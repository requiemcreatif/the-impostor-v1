import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Navbar";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import { pageAnimation } from "../components/animation";
import { motion } from "framer-motion";
import styled from "styled-components";

const Form = styled.form`
  //background: white;
  margin: 24.5rem auto;
  width: 40rem;
  height: 62rem;
  padding: 4rem;
  //border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem #ccc;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto 0 auto;
    //height: 60rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }

  p {
    text-align: left;
    margin-bottom: 5rem;
    font-size: 1.5rem;
    font-weight: 300;
  }
  label {
    display: block;
    margin-bottom: 5rem;
    font-family: "Blinker", sans-serif;
    span {
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      background: none;
      border: none;
      border-bottom: 1px solid #ccc;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Btn1 = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 1rem;
  border: none;
  //border: solid 1px #053651;
  border-radius: 0.5rem;
  background: #495867;
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background: #577399;
    color: #101b21;
    border: #577399 solid 1px;
  }
`;

const Div = styled(motion.div)``;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    navigate("/mainpage");
    //console.log(email, password);
  }

  return (
    <Div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Navbar />
      <Sidecontent />
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>
          Believe in yourself! Have faith in your abilities! Without a humble but reasonable
          confidence in your own powers you cannot be successful or happy. <br /> <br />
          <em>Norman Vincent Peale</em>
        </p>
        <label>
          {/* <span>Email:</span> */}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
          />
        </label>
        <label>
          {/* <span>Password:</span> */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </label>
        {!isPending && (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
            <Btn1>Login</Btn1>
          </motion.div>
        )}

        {isPending && <Btn1 disabled>Logging in...</Btn1>}
        {error && <p>{error}</p>}
      </Form>
      <Footer />
    </Div>
  );
};

export default Login;
