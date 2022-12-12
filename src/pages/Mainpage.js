import React from "react";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
//import Card from "../components/Card"
import PostList from "../components/PostList";
import { useCollection } from "../hooks/useCollection";
import Navbar from "../components/Navbar";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
//import Filter from "../components/Filter";
import styled from "styled-components";
import { pageAnimation } from "../components/animation";
import { motion } from "framer-motion";

const CardContainer = styled.div`
  margin: 14rem auto;
  max-width: 1500px;
  max-height: auto;
`;

const Mainpage = () => {
  // const { user } = useAuthContext();
  const { document, error } = useCollection("posts");
  // const [filter, setFilter] = useState("All");
  // const changeFilter = (newFilter) => {
  //   setFilter(newFilter);
  // };

  // const articlePosts = document
  //   ? document.filter((document) => {
  //       switch (filter) {
  //         case "All":
  //           return true;
  //         // case "mine":
  //         //   let postUser = false;
  //         //   document.postedByList.forEach((u) => {
  //         //     if (user.uid === u.id) {
  //         //       postUser = true;
  //         //     }
  //         //   });
  //         //   return postUser;
  //         case "Motivation":
  //         case "Mentor":
  //         case "Experience":
  //         case "Help":
  //         case "Information":
  //         case "Advice":
  //         case "Tesimonial":
  //           console.log(document.category, filter);
  //           return document.category === filter;
  //         default:
  //           return true;
  //       }
  //     })
  //   : null;
  return (
    <div>
      {/* <motion.div variants={pageAnimation} initial="hidden" animate="show"> */}
      <Navbar />
      <Sidecontent />
      <CardContainer>
        {/* <h2> Posts</h2> */}
        {error && <p className="error">{error}</p>}
        {/* {document && <Filter filter={filter} changeFilter={changeFilter} />} */}
        {/* {document && <PostList posts={document} articlePosts={articlePosts} />} */}
        {document && <PostList posts={document} />}
      </CardContainer>
      <Footer />
      {/* </motion.div> */}
    </div>
  );
};

export default Mainpage;
