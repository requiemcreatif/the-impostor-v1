import React from "react";
//import Card from "../components/Card"
import PostList from "../components/PostList";
import { useCollection } from "../hooks/useCollection";
import Navbar from "../components/Navbar"
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import styled from "styled-components"


const CardContainer = styled.div`
margin: 0 auto;
  max-width: 1500px;
    `



const Mainpage = () => {
  const {document, error} = useCollection("posts")
  return (
    <>
      <Navbar/>
      <Sidecontent />
        <CardContainer>
          {/* <h2> Posts</h2> */}
          {error && <p>{error}</p>}
          {document && <PostList posts={document}/>}
        </CardContainer>
      <Footer />
    </>
    
    
  )
}

export default Mainpage