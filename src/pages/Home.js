import React from "react";
import Header from "../components/Header";
import Sidecontent from "../components/Sidecontent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styled from "styled-components";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import { pageAnimation } from "../components/animation";
import { motion } from "framer-motion";

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
    <div>
      {/* <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show"> */}
      <Navbar />
      {/* <Menu /> */}
      <Sidecontent />

      <HomeDiv>
        <Header />
        <Description />
      </HomeDiv>
      <Footer />
      {/* </motion.div> */}
    </div>
  );
};

export default Home;
