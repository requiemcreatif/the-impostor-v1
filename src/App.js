import {BrowserRouter, Route, Routes, useNavigate, Navigate} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
//import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mainpage from "./pages/Mainpage";
import { motion } from "framer-motion";
import './App.css';

function App() {
  const {authIsReady, user} = useAuthContext()



  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mainpage" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
    )}
    
    </div>
  );
}

export default App;
