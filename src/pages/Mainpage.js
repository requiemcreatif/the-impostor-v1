import React from "react";
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import styled from "styled-components"


const CardContainer = styled.div`
    margin: 5rem auto;
    max-width: 1250px; ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    padding: 5rem;
    `



const Mainpage = () => {
  return (
    <>
      <Navbar/>
      <Sidecontent />
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}> */}
          <CardContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </CardContainer>
        {/* </motion.div> */}
      <Footer />
    </>
    
    
  )
}

export default Mainpage