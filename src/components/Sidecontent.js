import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/Logo-v2.svg";
import close from "../img/close.svg";
import MobileNav from "../img/Mobile-Navbar.svg";
//import MobileClose from "../img/Mobile-close.svg"

const SideContainer = styled.div`
  //margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0f4ff;
  padding: 2rem 20rem;
  width: 100%;
  max-width: 1500px;
  border-radius: 0.5rem;

  .hamburger-menu {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    padding: 2rem;

    @keyframes slideIn {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    .hamburger-menu {
      display: block;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  ul {
    display: flex;
    gap: 4rem;
    list-style: none;
    transition: all 0.2s ease;

    .close {
      width: 40px;
    }

    @media (max-width: 768px) {
      padding: 4rem 2rem;
      margin: 2rem 0;
      flex-direction: column;
      //justify-content: center;
      align-items: center;
      gap: 2rem;
      position: fixed;
      top: 60px;
      right: 0;
      left: 200px;
      //border: solid 1px #000000;
      //border-radius: 0.5rem;
      max-width: 100%;
      height: 100vh;
      animation: slideIn 0.5s ease-in-out;
      background: #f7f7ff;
      opacity: 0.9;
      //background: #e0f4ff;
      z-index: 100;

      li {
        text-align: center;
        border-bottom: solid 0.5px #053651;
        //border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        width: 10rem;
      }

      a {
        &:hover {
          color: #e63946;
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: #053651;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 2rem;
`;

const Sidecontent = () => {
  const { user } = useAuthContext();
  const [hiddeMenu, setHiddeMenu] = useState(true);

  return (
    <SideContainer>
      <Nav>
        <img src={logo} alt="logo impostr" className="impostr-logo" />
        <img
          src={MobileNav}
          alt="hamburger menu"
          className="hamburger-menu"
          onClick={() => setHiddeMenu(!hiddeMenu)}
        />
        <ul className={hiddeMenu ? "hidden" : "menu"}>
          <img
            src={close}
            alt="hamburger menu"
            className="hamburger-menu close"
            onClick={() => setHiddeMenu(!hiddeMenu)}
          />

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
              {/* <li>
                <Link to="/reflection">Reflection</Link>
              </li> */}
            </>
          )}
          {!user && (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
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
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              {/* <Link to="/"><Btn1 onClick={logout}>Logout</Btn1></Link> */}
            </motion.div>
          </Div>
        )}
      </Nav>
    </SideContainer>
  );
};

export default Sidecontent;
