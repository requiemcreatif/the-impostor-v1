import React from "react"
import styled from "styled-components"

const Btn = styled.button`
    margin-top: 2rem;
    width: 12rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    border: #e63946 solid 1px; 
    background: #e63946;
    color: #ffffff;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: #e63946;
        color: #E0F4FF;       
}`

const FormContainer = styled.div`
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
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
        flex-direction: column;
        gap: 4rem;
        //align-items: center;
        max-width: 600px;
    }
`
const Wrapper = styled.div`
    background: #495867;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E0F4FF;
    gap: 2rem;

    @media (min-width: 768px) {
        padding: 5rem 5rem;  
    }
     
     form {
            display: flex;
            gap: 1rem;
            flex-direction: row;
            align-items: center;

            input:focus {
                outline: none;
                color: #E0F4FF;
            }
            /* MOBILE VERSION */
            @media (max-width: 768px) {
                gap: 2rem;
                flex-direction: column;

                button {
                    width: 100%;
                }

            }
        input {
            border: none;
            border-bottom: #E0F4FF solid 1px;
            background: transparent;
            padding: 1rem 1rem;
            margin-top: 20px;
            width: 40rem;   
        }
            
            input::placeholder {
            padding: 1rem 0;
            color: #E0F4FF;
            border: none;

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
            <h2>Subscribe to our newsletter.</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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