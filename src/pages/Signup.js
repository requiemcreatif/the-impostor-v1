import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
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

const Signup = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
   


function handleSubmit(e) {
    e.preventDefault()
    console.log(mail, password);
}

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input 
        type="email" 
        onChange={(e) => setMail(e.target.value)}
        value={mail}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>
        <label>
        <span>name:</span>
        <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        </label>
      <button>Sign up</button>
    </Form>
  )
}

export default Signup