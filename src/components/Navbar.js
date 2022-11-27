import React from "react";
import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import styled from "styled-components"
import { motion } from "framer-motion";
import Sound from "../sounds/sound-click.mp3";

const Container = styled.div`
    width: 100%;
    //background: #CDF72B;
    //background: #000000;
    background: #577399;
`

const Nav = styled.nav`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #E0F4FF;
    padding: 2rem 0;
    gap: 2rem;
    max-width: 1500px;
    //background: #053651;
    background: #577399;
    //box-shadow: 0 0 0.5rem #101B21;
    border-radius: 0.5rem ;
    ul {
        display: flex;
        gap: 4rem;
        list-style: none;
}
a {
    text-decoration: none;
    //color: #E0F4FF;
    color: #000000;
}
`

const Btn1 = styled.button`
        width: 15rem;
        height: 4rem;
        padding: 0.5rem 1rem;
        border: solid 1px #f7f7ff;
        //border: solid 1px #ffffff;
        border-radius: 0.3rem;
        background: transparent;
        color: #f7f7ff;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            //background: #CDF72B;
            background: #bdd5ea;
            border: solid 1px #bdd5ea;
            //color: #101B21;     
            color: #000000;
    }`

const Btn2 = styled.button`
width: 15rem;
height: 4rem;
padding: 0.5rem 1rem;
border: solid 1px #f7f7ff;
border-radius: 0.5rem;
//background: #CDF72B;
background: transparent;
color: #f7f7ff;
font-weight: 300;
cursor: pointer;
&:hover {
    background: #fe5f55;
    color: #000000;
    border: solid 1px #fe5f55;
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
    const audio = new Audio(Sound);
    const playSound = () => {
        audio.play();
    }

  return (
    // <Nav className="navbar">
<Container>
    <div>
    {user && (
            <Div2>
                <div>Welcome back, {user.displayName}!</div> 
            </Div2>
            )}

    <Nav>
        
        <ul>
            {/* <li>
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
            )} */}
            {!user && (
            <>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >

                
                    <li><Link to="/Login"><Btn1 onClick={playSound}>Login</Btn1></Link></li>
                 
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                    <li><Link to="/Signup"><Btn2 onClick={playSound}>Create account</Btn2></Link></li>
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
                        <Link to="/"><Btn1 onClick={logout} >Logout</Btn1></Link>
                    </motion.div>
                </Div>
            )}
    </Nav>
    </div>
</Container> 
  )
}

export default Navbar