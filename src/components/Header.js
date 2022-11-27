import React from "react";
import {Link} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { motion } from 'framer-motion/dist/framer-motion'
import styled from "styled-components";

const HeaderStyled = styled.section`
    //background: #053651;
    color: white;
    padding: 15rem 0 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    align-items: left;
    height: auto;
    h1 {
      padding-top: 5rem;
        font-size: 8rem;
        font-weight: 300;
        //color: #CDF72B;
    }

    h2 {
        font-size: 3rem;
        font-weight: 600;  
    }
`
const WrapperContainer = styled.div`
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 900px;
    }
    `
const Btn2 = styled.button`
width: 15rem;
height: 4rem;
font-size: 1.8rem;
padding: 0.5rem 1rem;
border: solid 1px #CDF72B;
border-radius: 0.3rem;
background: #CDF72B;
color: #101B21;
font-weight: 300;
cursor: pointer;
&:hover {
    background: transparent;  
    color: #E0F4FF;
}`


const Header = () => {

    const { user } = useAuthContext()
  return (
    <WrapperContainer>    
        <HeaderStyled>
            {/* <h1>IMPOSTR</h1> */}
            <h1>Don't let <span style={{color: "#CDF72B"}} >Imposter syndrome</span>  stop you from fulling your potential</h1>
            {/* <p>Don’t be afraid of failing. Lorem Ipsum is simply dummy text! Lorem ipsum.</p> */}
            {!user && 
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
            <Link to="/Signup"><Btn2>Signup</Btn2></Link>
            </motion.div>}
            
        </HeaderStyled>
  </WrapperContainer>
  )
}

export default Header