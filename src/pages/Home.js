import React from "react";
import Header from "../components/Header";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import styled from "styled-components";
import Description from "../components/Description";
import Navbar from "../components/Navbar";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #f7f7ff;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 1500px;
  height: auto;
  padding: 10rem 2rem;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidecontent />
      <HomeDiv>
        <Header />
        <Description />
      </HomeDiv>
      <Footer />
    </>
  );
};

export default Home;
