import styled from "styled-components";

const CardStyle = styled.div`
    background: #E0F4FF;
    width: 40rem;
    height: 45rem;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    
    
    `
    const Btn2 = styled.button`
    width: 12rem;
    height: 4rem;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #CDF72B;
    border-radius: 0.5rem;
    background: #CDF72B;
    color: #101B21;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: transparent;
        border: solid 1px #101B21;
        color: #101B21;
    }`

const Title = styled.div`
    padding: 25rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 2rem;

`
const CardHeader = styled.div`
    background: #101B21;
    width: 100%;
    height: 25rem;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute ;
    top: 0;

`

const Card = () => {
  return (
    <CardStyle>
      <CardHeader>
      </CardHeader>
      <Title>
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