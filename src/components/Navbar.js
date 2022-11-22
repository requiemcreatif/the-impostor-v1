import {Link} from "react-router-dom"
import styled from "styled-components"
import logo from "../img/Logo.svg"



const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 2rem;
    background: #101B21;
    box-shadow: 0 0 1rem #ccc;
    ul {
        display: flex;
        list-style: none;
        li {
            margin-left: 2rem;
            //login button
    }
}
`
const Btn1 = styled.button`
        padding: 0.5rem 1rem;
        border: solid 1px #CDF72B;
        border-radius: 0.5rem;
        background: transparent;
        color: #E0F4FF;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            background: #CDF72B;
            color: #101B21;
                
    }`

const Btn2 = styled.button`
padding: 0.5rem 1rem;
border: solid 1px #CDF72B;
border-radius: 0.5rem;
background: #CDF72B;
color: #101B21;
font-weight: 300;
cursor: pointer;
&:hover {
    background: transparent;
    
    color: #E0F4FF;
}`

const Navbar = () => {
  return (
    <Nav className="navbar">
        <img src={ logo} alt="logo impostr" className="impostr-logo" />
        <ul>
            <li className="title">Impostr</li>
            <li><Link to="/Login"><Btn1>Login</Btn1></Link></li>
            <li><Link to="/Signup"><Btn2>Signup</Btn2></Link></li>
        </ul>
    </Nav>
  )
}

export default Navbar