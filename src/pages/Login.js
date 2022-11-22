import { useState } from 'react'
import React from 'react'

const Login = () => {
const [mail, setMail] = useState("")
const [password, setPassword] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    //console.log(mail, password);
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button>Login</button>
    </form>
  )
}

export default Login