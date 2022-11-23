import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
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
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const { login, error, isPending } = useLogin()
const navigate = useNavigate()

function handleSubmit(e) {
    e.preventDefault()
    login(email, password)
    navigate("/mainpage")
    //console.log(email, password);
}



  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
      {!isPending && <Btn1>Login</Btn1>}
      {isPending && <Btn1 disabled>Logging in...</Btn1>}
      {error && <p>{error}</p>}
    </Form>
  )
}

export default Login