import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
//import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mainpage from "./pages/Mainpage";
import PostInfo from "./pages/PostInfo";
import './App.css';
import Createpost from "./pages/Createpost";

function App() {
  const {authIsReady, user} = useAuthContext()





  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<Createpost/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="posts/:id" element={user ? <PostInfo/> : <Navigate to="/login"/>}/> 
          {/* {!user && <Navigate to="/login"/>}
          {user && <Blog/>} */}


        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mainpage"  element={user ? <Mainpage/> : <Navigate to="/login"/>}/> 
      </Routes>
    </BrowserRouter>
    )}
   
    
    </div>
  );
}

export default App;
