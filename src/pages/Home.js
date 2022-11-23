import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components"
import Description from "../components/Description"

const HomeDiv = styled.div`
    background-color: #053651;
    height: auto;
    width: 100%;
    padding: 10rem 2rem;
    `




const Home = () => {
  return (
    <>
    <HomeDiv>
      <Header />
      <Description />
    </HomeDiv>
      <Footer />
    </>
    
    
  )
}

export default Home