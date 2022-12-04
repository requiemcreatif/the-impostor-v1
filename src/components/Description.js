import React from "react";
import styled from "styled-components";
import iconOne from "../img/icon-one.svg";
import iconTwo from "../img/icon-two.svg";

const Wrapper = styled.div`
  /* DESKTOP */
  max-width: 1100px;
  margin: 5rem auto;
  background-color: #bdd5ea;
  border-radius: 10px;

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
  return (
    <Wrapper className="description">
      {/* <SectionOne>
            <DivOne></DivOne>
            <DivTwo></DivTwo>
            <DivThree></DivThree>
        </SectionOne> */}

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
    </Wrapper>
  );
};

export default Description;
