import React from "react";
import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import styled from "styled-components"
import { motion } from "framer-motion";
import logo from "../img/Logo-v2.svg"

const SideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid #ccc;
    //border-radius: 10px;
    //box-shadow: 0 0 0 0.5rem #101B21;
`

const Nav = styled.nav`
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E0F4FF;
    padding: 2rem 0;
    gap: 5rem;
    max-width: 1500px;
    border-radius: 0.5rem ;
    ul {
        display: flex;
        //justify-content: space-between;
        gap: 4rem;
        list-style: none;
}
a {
    text-decoration: none;
    //color: #E0F4FF;
    color: #000000;
}
`

const Div = styled.div`
    display: flex;
    gap: 2rem;
    `

const Sidecontent = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
  return( 
  <SideContainer>
     
     <Nav>
     <img src={ logo} alt="logo impostr" className="impostr-logo" />
        <ul>
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
