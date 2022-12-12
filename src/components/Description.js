import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import styled from "styled-components";
import iconOne from "../img/icon-one.svg";
import iconTwo from "../img/icon-two.svg";

const Wrapper = styled.div`
  /* DESKTOP */
  max-width: 1100px;
  margin: 5rem auto;
  background-color: #bdd5ea;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  button {
    margin: 0 auto 2rem auto;
    padding: 1rem 2rem;
    width: 15rem;
    height: 4rem;
    border: solid 1px #fe5f55;
    border-radius: 0.5rem;
    background: #fe5f55;
    color: #f7f7ff;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background: #577399;
      color: #f7f7ff;
      border: #577399 solid 1px;
      transition: all 0.3s ease-in-out;
      scale: 1.1;
    }
  }
  /* MOBILE */
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;
// Description section
const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    //width: 40rem;
    //margin: 0 auto;
  }
  //gap: 3rem;
`;
const TopSection = styled.div`
  display: flex;
  gap: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #011627;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 3rem;
  p {
    text-align: left;
    padding-right: 5rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    p {
      padding-right: 0;
    }
    h2 {
      font-size: 1.5em;
    }
  }
`;

const Description = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeModal = () => setModalIsOpen(true, console.log("show"));

  const handleClose = () => setModalIsOpen(false, console.log("closed"));

  // show modal component on click

  return (
    <div>
      {modalIsOpen && <Modal onClick={handleClose} />}
      {modalIsOpen && <Backdrop onClick={handleClose} />}
      <Wrapper className="description">
        <SectionTwo>
          <SectionWrapper>
            <TopSection>
              <img src={iconOne} alt="icon left" />
              <h2>What is Imposter Syndrome?</h2>
            </TopSection>

            <p>
              Impostor syndrome, also known as impostor phenomenon, is a psychological occurrence in
              which an individual doubts their skills, talents, or accomplishments and has a
              persistent internalized fear of being exposed as a "fraud".
            </p>
          </SectionWrapper>

          <SectionWrapper>
            <TopSection>
              <img src={iconTwo} alt="icon right" />
              <h2>Who does this syndrome affect?</h2>
            </TopSection>
            <p>
              Today, impostor syndrome can apply to anyone “who isn’t able to internalize and own
              their successes,”. It’s estimated that 70% of people will experience at least one
              episode of imposter syndrome during their lifetime. You are not Alone!!
            </p>
          </SectionWrapper>
        </SectionTwo>
        <button onClick={removeModal}>Read More</button>
      </Wrapper>
    </div>
  );
};

export default Description;
