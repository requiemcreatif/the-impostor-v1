import React from "react";
import Navbar from "./Navbar";
import Sidecontent from "./Sidecontent";

import styled from "styled-components";

const MenuDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.9;
  clip-path: circle(50px at 100% 10%);
  -webkit-clip-path: circle(50px at 100% 10%);

  transition: all 0.5s ease-in-out;
`;

const Menu = () => {
  const [menu, setMenu] = React.useState(false);

  const handleMenu = () => {
    setMenu(!menu);

    console.log("menu");
  };
  return (
    <MenuDiv onClick={handleMenu}>
      <h1>Menu</h1>
      <p></p>
    </MenuDiv>
  );
};

export default Menu;
