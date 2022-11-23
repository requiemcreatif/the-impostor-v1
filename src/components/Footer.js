import styled from "styled-components"

const Btn = styled.button`
    margin-top: 2rem;
    width: 12rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #CDF72B;
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

const FormContainer = styled.div`
    background: #64BBEB;
    padding: 6rem 1rem;
    width: 1250px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    color: #E0F4FF;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }

`
const Wrapper = styled.div`
    background: #2998D5;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #E0F4FF;
    gap: 2rem;

    @media (min-width: 768px) {
        padding: 5rem 10rem;
        
    }
     
     form {
            display: flex;
            gap: 1rem;
            input {
                border: #E0F4FF solid 1px;
                border-radius: 0.5rem;
                padding: 0.5rem 1rem;
                margin-top: 20px;
                width: 25rem;
                height: 3.5rem;
                background: transparent;
            }
            input::placeholder {
            color: #E0F4FF;
            opacity: 1; 
        } 
        }`

const Footer = () => {

const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
}


  return (
    <Wrapper>
        <FormContainer>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing tempor
            </p>
            <form onSubmit={HandleSubmit}>
                <input 
                type="text" 
                placeholder="Enter your email" 
                
                />
                <Btn>Subscribe</Btn>
            </form>
        </FormContainer>
        <p>
            Impostr 2022. All rights reserved
        </p>
    </Wrapper>
  )
}

export default Footer