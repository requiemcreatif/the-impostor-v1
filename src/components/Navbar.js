import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import styled from "styled-components"
import logo from "../img/Logo.svg"



const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //flex-direction: column;
    color: #E0F4FF;
    padding: 2rem 2rem;
    //gap: 1rem;
    background: #101B21;
    box-shadow: 0 0 1rem #ccc;
    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
}
`

const Btn1 = styled.button`
        width: 8rem;
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
width: 8rem;
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

const BtnMenu = styled.button`
        width: 8rem;
        padding: 0.5rem 1rem;
        border: none;
        //border-radius: 0.5rem;
        background: transparent;
        color: #E0F4FF;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            //background: #CDF72B;
            color: #CDF72B;
                
    }`

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()



  return (
    <Nav className="navbar">
        <img src={ logo} alt="logo impostr" className="impostr-logo" />
        {/* <h1>IMPOSTR</h1> */}
        {/* <ul>
            <li>
                <img src={ logo} alt="logo impostr" className="impostr-logo" />
    
            </li>
        </ul> */}
        
        <ul>
            {/* <li>
                <img src={ logo} alt="logo impostr" className="impostr-logo" />
            </li> */}
            <li>
                <Link to="/">Home</Link>
            </li>
            {user && (
                <li>
                <Link to="/mainpage">Back</Link>
                </li>               
            )}
         
            {!user && (
                <>
                <li><Link to="/Login"><Btn1>Login</Btn1></Link></li>
                <li><Link to="/Signup"><Btn2>Signup</Btn2></Link></li>
                </> 
            )}
            {user && (
                <>
                <li>Hi, {user.displayName}</li>
                <li><Link to="/"><Btn1 onClick={logout}>Logout</Btn1></Link></li>
                </>
                
            )}
        </ul>
          
    </Nav>
  )
}

export default Navbar