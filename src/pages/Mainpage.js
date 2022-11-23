import Card from "../components/Card"
import styled from "styled-components"

const CardContainer = styled.div`
    margin: 5rem auto;
    max-width: 1250px; ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    padding: 5rem;
    `



const Mainpage = () => {
  return (
    <CardContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </CardContainer>
    
  )
}

export default Mainpage