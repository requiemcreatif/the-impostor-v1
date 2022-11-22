import { useState } from 'react'
import styled from 'styled-components'


const Form = styled.form`
background: white;
    margin: 6rem auto;
    width: 40rem;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 0 0 1rem #ccc;
    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    label {
        display: block;
        margin-bottom: 1rem;
        span {
            display: block;
            margin-bottom: 0.5rem;
        }
        input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
        }
    }
`

const Btn1 = styled.button`
        margin-top: 2rem;
        width: 10rem;
        padding: 0.5rem 1rem;
        border: solid 1px #053651;
        border-radius: 0.5rem;
        background: transparent;
        color: #053651;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            background: #2998D5;
            color: #101B21;
            border: #2998D5 solid 1px;
                
    }`


const Login = () => {
const [mail, setMail] = useState("")
const [password, setPassword] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    console.log(mail, password);
}

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
        type="email" 
        onChange={(e) => setMail(e.target.value)}
        value={mail}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>
      <Btn1>Login</Btn1>
    </Form>
  )
}

export default Login