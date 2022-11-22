import {Link} from "react-router-dom"

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li className="title">Impostr</li>
            <li><Link to="/Login"><button>Login</button></Link></li>
            <li><Link to="/Signup"><button>Signup</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar