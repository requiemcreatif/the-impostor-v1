import React from "react";
import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import styled from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion'
import logo from "../img/Logo-v2.svg"

const Nav = styled.nav`
    /* position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    z-index: 1; */
    margin: 0 auto;
    max-width: 1500px ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    //flex-direction: column;
    color: #E0F4FF;
    padding: 2rem 0;
    gap: 2rem;
    background: #053651;
    //background: #101B21;
    //box-shadow: 0 0 1rem #ccc;
    //shadow at the bottom
    box-shadow: 0 0 0.5rem #101B21;
    ul {
        display: flex;
        gap: 4rem;
        list-style: none;
}
a {
    text-decoration: none;
    color: #E0F4FF;
}
`

const Btn1 = styled.button`
        width: 8rem;
        padding: 0.5rem 1rem;
        border: solid 1px #CDF72B;
        border-radius: 0.3rem;
        background: transparent;
        color: #E0F4FF;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            background: #CDF72B;
            color: #101B21;
                
    }`

const Btn2 = styled.button`
width: 8rem;
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

const Div = styled.div`
    display: flex;
    gap: 2rem;
    `

const Div2 = styled.div`
    background: #101B21;
    color: #E0F4FF;
    padding: 1rem 15rem;
    font-family: "Blinker", sans-serif;
    text-align: right;
    `

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    

  return (
    // <Nav className="navbar">
    <div>
    {user && (
            <Div2>
                <div>Welcome back, {user.displayName}!</div> 
            </Div2>
            )}

    <Nav>
        <img src={ logo} alt="logo impostr" className="impostr-logo" />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {user && (
                <li>
                    <Link to="/mainpage">Back</Link>
                </li>               
            )}
            {!user && (
            <>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >

                
                    <li><Link to="/Login"><Btn1>Login</Btn1></Link></li>
                 
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                    <li><Link to="/Signup"><Btn2>Signup</Btn2></Link></li>
                    </motion.div>

                </> 
            )}
        </ul>
        {user && (
                <Div>
                    <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <Link to="/"><Btn1 onClick={logout}>Logout</Btn1></Link>
                    </motion.div>
                </Div>
            )}
    </Nav>
    </div>
    
  )
}

export default Navbar