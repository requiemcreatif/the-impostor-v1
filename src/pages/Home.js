import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components"
import Description from "../components/Description"
import Navbar from "../components/Navbar";

const HomeDiv = styled.div`
    background-color: #053651;
    height: auto;
    width: 100%;
    padding: 10rem 2rem;
    `

const NavWrapper = styled.div`
position: fixed;
width: 100%;
right: 0;
left: 0;
z-index: 1;
margin: 0 auto;
max-width: 1500px ;
`

const Home = () => {
  return (
    <>
    <NavWrapper>
    <Navbar/>
    </NavWrapper>
    <HomeDiv>
      <Header />
      <Description />
    </HomeDiv>
      <Footer />
    </>
    
    
  )
}

export default Home