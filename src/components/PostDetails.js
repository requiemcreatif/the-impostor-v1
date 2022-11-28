import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

//Styled Components
const PostGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: left;
    margin: 4rem auto;
    padding: 0 1rem;
    max-width:  1000px;
    h2 {
        text-align: center;
        padding: 2rem;
        font-size: 2em;
        color: #000;
        font-weight: 400;
        // line at the bottom of the title
    }
    p:nth-child(4) {
        font-size: 1em;
        color: #2D3142;
        font-weight: 400;
        font-style: italic;
    }
    `


const PostDetails = ({post}) => {
  return(
    <div>
        <PostGrid>
        <h2> {post.name}</h2>
        <p>Date: {post.date.toDate().toDateString()}</p>
        <p> {post.details}</p>
        {/* <div>
            <img src={post.image} alt="post" />
        </div> */}
        <p>Post by: {post.postedBy.displayName} </p>
        </PostGrid>

    </div>
  
    );
 
  
};

export default PostDetails;
