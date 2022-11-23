import styled from "styled-components";

const HeaderStyled = styled.section`
    //background: #053651;
    color: white;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: left;
    align-items: left;
    height: auto;
    h1 {
      padding-top: 5rem;
        font-size: 8rem;
        font-weight: 300;
        color: #CDF72B;
    }

    h2 {
        font-size: 3rem;
        font-weight: 600;  
    }
`
const Btn = styled.button`
    margin-top: 2rem;
    width: 12rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #053651;
    border-radius: 0.5rem;
    background: #CDF72B;
    color: #053651;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: #E0F4FF;
        border: #CDF72B solid 1px;
}`

const WrapperContainer = styled.div`
    
    

    @media (min-width: 768px) {
        max-width: 900px;
        padding: 0 10rem;
    }
    `



const Header = () => {
  return (
    <WrapperContainer>    
        <HeaderStyled>
            <h1>IMPOSTR</h1>
            <h2>Don't let <span style={{color: "#CDF72B"}} >Imposter syndrome</span>  stop you from fulling your potential</h2>
            <p>Don’t be afraid of failing. Lorem Ipsum is simply dummy text! Lorem ipsum.</p>
            
            <Btn>Sign up</Btn>
        </HeaderStyled>
  </WrapperContainer>
  )
}

export default Header