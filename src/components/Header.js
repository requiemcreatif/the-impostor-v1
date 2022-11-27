import React from "react";
import {Link} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import Sound from "../sounds/sound-click.mp3";
//import { motion } from 'framer-motion/dist/framer-motion'
import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderStyled = styled.section`
    //background: #053651;
    //color: white;
    max-width: 1000px;
    color: #011627;
    padding: 10rem 0 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    //justify-content: left;
    //align-items: left;
    height: auto;
    h1 {
      padding-top: 5rem;
        font-size: 10rem;
        font-weight: 600;
        //color: #CDF72B;
    }

    /* h2 {
        font-size: 3rem;
        font-weight: 600;  
    } */
`
const WrapperContainer = styled.div`
    
    /* @media (min-width: 768px) {
        margin: 0 auto;
        //max-width: 800px;
    } */
    `
const Btn2 = styled.button`
width: 15rem;
height: 4rem;
padding: 0.5rem 1rem;
border: solid 1px #e63946;
border-radius: 0.5rem;
//background: #CDF72B;
background: transparent;
color: #e63946;
font-weight: 600;
cursor: pointer;
&:hover {
    background: #e63946;
    color: #f7f7ff;
}`


const Header = () => {

    const { user } = useAuthContext()
    const audio = new Audio(Sound);
    audio.loop = false;
  return (
    <WrapperContainer>    
        <HeaderStyled>
            {/* <h1>IMPOSTR</h1> */}
            <h1>Don't let <span style={{color: "#e63946"}} >Imposter syndrome</span>  stop you from fulling your potential</h1>
            {/* <p>Don’t be afraid of failing. Lorem Ipsum is simply dummy text! Lorem ipsum.</p> */}
            {!user && 
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
            <Link to="/Signup"><Btn2 
            onClick={() => audio.play()}
            >Create account</Btn2></Link>
            </motion.div>}
            
        </HeaderStyled>
  </WrapperContainer>
  )
}

export default Header