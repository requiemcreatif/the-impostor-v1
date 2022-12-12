import React from "react";
import styled from "styled-components";
import Music from "./Music";

const Wrapper = styled.div`
  background: #053651;
  padding: 2rem 2rem;
  text-align: center;
  color: #e0f4ff;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const FormContainer = styled.div`
  margin: 0 auto;
  background-color: #053651;
  max-width: 1200px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  color: #e0f4ff;

  h2 {
    padding-bottom: 4rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
  /* desktop media */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;

    //padding: 0 1rem;
    //max-width: 400px;
  }

  form {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;

    input:focus {
      outline: none;
      color: #e0f4ff;
    }

    input {
      border: none;
      border: #e0f4ff solid 1px;
      border-radius: 0.3rem;
      background: transparent;
      padding: 1rem 1rem;
      margin-top: 20px;
      width: 35rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      input {
        width: 100%;
        margin-top: 0;
      }
    }
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Copyrights = styled.div`
  width: 100%;
  background: #101b21;
  padding: 2rem 0;
  text-align: center;
  color: #e0f4ff;
`;

const Btn = styled.button`
  margin-top: 2rem;
  width: 12rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  border: #e63946 solid 1px;
  background: #e63946;
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background: #e63946;
    color: #e0f4ff;
  }

  @media (max-width: 768px) {
    margin: 2rem;
    width: 100%;
  }
`;

const Footer = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <Wrapper>
        <FormContainer>
          <Div>
            <p>Patrick Watson - Je te laisserai des mots</p>
            <Music />
          </Div>

          {/* <h2>Subscribe to the weekly power email.</h2> */}
          <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="Enter your email" />
            <Btn>Subscribe</Btn>
          </form>
        </FormContainer>
      </Wrapper>
      <Copyrights>
        <p>© 2022 Impostr. All rights reserved</p>
      </Copyrights>
    </>
  );
};

export default Footer;
