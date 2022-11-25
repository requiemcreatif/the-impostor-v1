import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import Navbar from "../components/Navbar"
import { motion } from 'framer-motion'
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
        margin-bottom: 2rem;
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

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const { signup, isPending, error } = useSignup()
   


function handleSubmit(e) {
    e.preventDefault()
    //console.log(email, password);
    signup(email, password, displayName)
}

  return (
    <div>
        <Navbar />
        <Form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <p>The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.<br /> <br /><em>Mark caine</em></p>
      
      <label>
        {/* <span>Email:</span> */}
        <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        required
        />
      </label>
      <label>
        {/* <span>Password:</span> */}
        <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        required
        />
      </label>
        <label>
        {/* <span>Name:</span> */}
        <input
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        placeholder="Name"
        required
        />
        </label>
        {!isPending && 
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
        <Btn1>Sign up</Btn1>
         </motion.div>
        }
        {isPending && <Btn1 disabled>Signing up...</Btn1>}
        {error && <div>{error}</div>}
        <p>By signing up you are agreeing to our Terms and Conditions.</p>
        
    </Form>
    </div>
    
  )
}

export default Signup