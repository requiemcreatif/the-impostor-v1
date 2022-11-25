import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import Navbar from "../components/Navbar"
import styled from 'styled-components'


const Form = styled.form`
background: white;
    margin: 6rem auto;
    width: 40rem;
    height: 62rem;
    padding: 4rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 0 0 1rem #ccc;
    h2 {
        text-align: center;
        margin-bottom: 5rem;
    }

    p {
      text-align: left;
      margin-bottom: 5rem;
      font-size: 1.5rem;
      font-weight: 300;
      
    }
    label {
        display: block;
        margin-bottom: 5rem;
        font-family: "Blinker", sans-serif;
        span {
            display: block;
            margin-bottom: 0.5rem;
            
        }
        input {
            width: 100%;
            padding: 0.5rem;
            
            border: none;
            border-bottom: 1px solid #ccc;
        }
    }
`

const Btn1 = styled.button`
        margin-top: 2rem;
        width: 100%;
        height: 5rem;
        padding: 0.5rem 1rem;
        border: solid 1px #053651;
        border-radius: 0.5rem;
        background: #053651;
        color: white;
        font-weight: 300;
        font-size: 1.5rem;
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
    <div>
         
        <Navbar />
        
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. <br /> <br /><em>Norman Vincent Peale</em></p>
      <label>
        {/* <span>Email:</span> */}
        <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        />
      </label>
      <label>
        {/* <span>Password:</span> */}
        <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        />
      </label>
      {!isPending && <Btn1>Login</Btn1>}
      {isPending && <Btn1 disabled>Logging in...</Btn1>}
      {error && <p>{error}</p>}
    </Form>
    </div>
  )
}

export default Login