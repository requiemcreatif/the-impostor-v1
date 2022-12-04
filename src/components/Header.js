import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import YouTube from "react-youtube";
import Sound from "../sounds/sound-click.mp3";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: grid;
`;

const HeaderStyled = styled.section`
  max-width: 1100px;
  color: #011627;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 4rem;
  height: auto;
  h1 {
    padding-top: 2rem;
    font-size: 10rem;
    font-weight: 600;
    //opacity: 0.8;
    //transition: opacity 230ms ease-in-out;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4em;
      padding-top: 0;
    }
  }
`;

const Btn2 = styled.button`
  width: 15rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  border: solid 1px #e63946;
  border-radius: 0.5rem;
  background: transparent;
  color: #e63946;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #e63946;
    color: #f7f7ff;
  }
`;

const Header = () => {
  const { user } = useAuthContext();
  const audio = new Audio(Sound);
  audio.loop = false;
  return (
    <div>
      <HeaderStyled>
        {/* <h1>IMPOSTR</h1> */}
        <h1 className="header">
          Don't let <span style={{ color: "#e63946" }}>Imposter syndrome</span> stop you from
          fulling your potential
        </h1>
        {/* <p>Don’t be afraid of failing. Lorem Ipsum is simply dummy text! Lorem ipsum.</p> */}

        {!user && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link to="/Signup">
              <Btn2 onClick={() => audio.play()}>Create account</Btn2>
            </Link>
          </motion.div>
        )}
      </HeaderStyled>
      {/* <YouTube /> */}
    </div>
  );
};

export default Header;
