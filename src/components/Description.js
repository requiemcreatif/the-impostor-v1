import styled from "styled-components";
import iconOne from "../img/icon-one.svg";
import iconTwo from "../img/icon-two.svg";

const Wrapper = styled.div`

    max-width: 1200px;
    margin: 5rem auto;
    background-color: #E0F4FF;
    border-radius: 10px;

    @media (min-width: 768px) {
        max-width: 1250px;
        margin: 15rem auto;
    }
    `

// top colored section
const SectionOne = styled.section`
    display: flex;
    `
const DivOne = styled.div`
    width: 20rem;
    height: 2rem;
    background: #2998D5;
    border-radius: 10px 0 0 0;
    `
const DivTwo = styled.div`
width: 100rem;
height: 2rem;
background: #CDF72B;
`
const DivThree = styled.div`
    width: 20rem;
    height: 2rem;
    background: #101B21;
    border-radius: 0 10px 0 0;
    `
// Description section
const SectionTwo = styled.section`
display: flex;

@media (max-width: 768px) {
    flex-direction: column;
    

    
}
//gap: 3rem;
`
const TopSection = styled.div`
    display: flex;
    gap: 2rem;

    h2 {
        font-size: 3rem;
    }

    `

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 3rem;
     p {
        text-align: left;
        padding-right: 5rem;
     }
    `


const Description = () => {
  return (
    <Wrapper>
        <SectionOne>
            <DivOne></DivOne>
            <DivTwo></DivTwo>
            <DivThree></DivThree>
        </SectionOne>

        <SectionTwo>
            <SectionWrapper>
                <TopSection>
                    <img src={iconOne} alt="icon left" />
                    <h2>What is Imposter Syndrome?</h2>   
                </TopSection>
                
                <p>Impostor syndrome, also known as impostor phenomenon, is a psychological occurrence in which an individual doubts their skills, talents, or accomplishments and has a persistent internalized fear of being exposed as a "fraud".</p>
            </SectionWrapper>

            <SectionWrapper>
                <TopSection>
                    <img src={iconTwo} alt="icon right" />
                    <h2>Who does this syndrome affect?</h2>
                </TopSection>
                <p>Impostor syndrome, also known as impostor phenomenon, is a psychological occurrence in which an individual doubts their skills, talents, or accomplishments and has a persistent internalized fear of being exposed as a "fraud".</p>    
            </SectionWrapper>
        </SectionTwo>
    </Wrapper>
  )
}

export default Description