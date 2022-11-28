import React from "react";
import Header from "../components/Header";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import styled from "styled-components"
import Description from "../components/Description"
import Navbar from "../components/Navbar";


const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

    //background-color: #ffffff;
    background-color: #f7f7ff;
    //border: 1px solid #ccc;
    margin: 0 auto;
    //border-radius: 10px;
    margin-bottom: 2rem;
    //background-color: #ffff;
    max-width: 1500px;
    height: auto;
    //width: 100%;
    padding: 10rem 2rem;
    `





const Home = () => {
  return (
    <>
    {/* <NavWrapper>
     <Navbar/>
    </NavWrapper> */}
    <Navbar/>
    <Sidecontent />

      <HomeDiv>
        <Header />
        <Description />

      </HomeDiv>
        

    
      <Footer />
    </>
    
    
  )
}

export default Home