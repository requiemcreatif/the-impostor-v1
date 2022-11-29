import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import styled from "styled-components"
import { motion } from "framer-motion";
import logo from "../img/Logo-v2.svg"
import MobileNav from "../img/Mobile-Navbar.svg"
//import MobileClose from "../img/Mobile-close.svg"


const SideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Nav = styled.nav`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #E0F4FF;
    padding: 2rem 20rem;
    width: 100%;
    //gap: 10rem;
    //max-width: 1500px;
    border-radius: 0.5rem;

    .hamburger-menu {
        display: none;
    }

    @media (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
            .hamburger-menu {
                display: block;
            }
        }

    ul {
        display: flex;
        gap: 4rem;
        list-style: none;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 1rem;

            li {
                text-align: center;
                border-bottom: solid 1px #000000;
                //border-radius: 0.5rem;
                padding: 0.5rem 1rem;
                width: 10rem;
            }
        }

    }
    a {
        text-decoration: none;
        color: #000000;
    }`

const Div = styled.div`
    display: flex;
    gap: 2rem;
    `

const Sidecontent = () => {

    const { user } = useAuthContext()
    const [hiddeMenu, setHiddeMenu] = useState(true)
  


  return( 
  <SideContainer>
     
     <Nav>
     <img src={logo} alt="logo impostr" className="impostr-logo" />
     <img 
        src={MobileNav}
     alt="hamburger menu" 
     className="hamburger-menu"
        onClick={() => setHiddeMenu(!hiddeMenu)}
     />
        <ul className={(hiddeMenu ? "hidden" : "menu")}>
            <li>
                <Link to="/">Home</Link>
            </li>
            {user && (
            <>
                <li>
                    <Link to="/mainpage">Blog</Link>
                </li> 
                <li>
                    <Link to="/createpost">Add Post</Link>
                </li>
            </>             
            )}
            {!user && (
            <>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                    {/* <li><Link to="/Login"><Btn1>Login</Btn1></Link></li> */}
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
                        {/* <Link to="/"><Btn1 onClick={logout}>Logout</Btn1></Link> */}
                    </motion.div>
                </Div>
            )}
    </Nav>
  </SideContainer>)
};

export default Sidecontent;
