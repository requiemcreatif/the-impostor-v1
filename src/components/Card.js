import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    //background: #E0F4FF;
    width: 40rem;
    height: 40rem;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    `
    const Btn2 = styled.button`
    width: 10rem;
    height: 3rem;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #101B21;
    border-radius: 0.5rem;
    //background: #E0F4FF;
    background: transparent;
    color: #101B21;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: #053651;
        border: solid 1px #053651;
        color: #E0F4FF;
    }`

const Title = styled.div`
    padding: 25rem 3rem 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    //z-index: 1;
  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`
const CardHeader = styled.div`
    background: #101B21;
    width: 38rem;
    height: 25rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute ;
    //z-index: 0;
    top: 1rem;
`

const Card = () => {
  return (
    <CardStyle>
      <CardHeader>
      </CardHeader>
      <Title>
        {/* <Btn2>Read more</Btn2> */}
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        </p>
        <Btn2>Read more</Btn2>
      </Title>
    </CardStyle>
  )
}

export default Card