import styled from "styled-components"

const Btn = styled.button`
    margin-top: 2rem;
    width: 12rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #CDF72B;
    border-radius: 0.3rem;
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
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    color: #E0F4FF;

    p {
        font-size: 1.5rem;
        font-weight: 300;
        padding: 0 2rem;
    }

    /* desktop media */
    @media (min-width: 768px) {
        
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        width: 1250px;
    }

`
const Wrapper = styled.div`
    background: #2998D5;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E0F4FF;
    gap: 2rem;

    @media (min-width: 768px) {
        padding: 5rem 10rem;
        
    }
     
     form {
            display: flex;
            gap: 1rem;
            flex-direction: row;
            align-items: center;

            /* MOBILE VERSION */
            @media (max-width: 768px) {
                gap: 2rem;
                flex-direction: column;

                button {
                    width: 100%;
                }

            }
            input {
                border: #E0F4FF solid 1px;
                border-radius: 0.3rem;
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