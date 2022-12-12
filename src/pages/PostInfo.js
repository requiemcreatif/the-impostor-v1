import React from "react";
import { useDocument } from "../hooks/useDocument";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidecontent from "../components/Sidecontent";
import PostDetails from "../components/PostDetails";
import Comments from "../components/Comments";
import styled from "styled-components";
import { animation } from "../components/animation";
import { motion } from "framer-motion";

const Blog = () => {
  const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin: 4rem auto;
    padding: 0 4rem;
  `;

  const { id } = useParams();
  const { error, document } = useDocument("posts", id);

  if (error) {
    return <div className="error-message">{error} </div>;
  }
  if (!document) {
    return <div>Fetching...</div>;
  }

  return (
    <>
      <Navbar />
      <Sidecontent />
      <PostContainer>
        <PostDetails post={document} />
        <Comments post={document} />
      </PostContainer>
      <Footer />
    </>
  );
};

export default Blog;
