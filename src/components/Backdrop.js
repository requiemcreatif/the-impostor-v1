import React from "react";
import styled from "styled-components";

const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #053651;
  opacity: 0.5;
  //background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  //transition: all 0.3s ease-in-out;
`;

const Backdrop = ({ onClick }) => {
  return <BackdropOver onClick={onClick}></BackdropOver>;
};

export default Backdrop;
