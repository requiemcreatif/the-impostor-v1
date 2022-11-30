import React from "react";
import {useFirestore} from "../hooks/useFirestore"
import {useAuthContext} from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



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
    // blog article
    p:nth-child(4) {
        font-size: 1.2em;
        color: #2D3142;
        font-weight: 300;
        //font-style: italic;
        //border: #000 solid 1px;
        border-radius: 5px;
        padding: 3rem;

        @media (max-width: 768px) {
            font-size: 1.2em;
            padding: 0rem;
        }
    }
    `
    const Btn1 = styled.button`
    margin-top: 2rem;
    width: 15rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    border: solid 1px #E63946;
    border-radius: 0.5rem;
    background: #E63946;
    color: white;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        background: #2998D5;
        color: #101B21;
        border: #2998D5 solid 1px;             
}
@media (max-width: 768px) {
    width: 100%;    
}

`

const PostDetails = ({post}) => {
    const {deleteDocument} = useFirestore("posts")
    const {user} = useAuthContext()
    const navigate = useNavigate()


    const handleClick = (e) => {
        deleteDocument(post.id)
        navigate("/mainpage")
    }

  return(
    <div>
        <PostGrid>
        <h2> {post.name}</h2>
        <p>Post by: {post.postedBy.displayName} </p>
        <p>Date: {post.date.toDate().toDateString()}</p>
        <p> {post.details}</p>
        {/* <div>
            <img src={post.image} alt="post" />
        </div> */}
        
        {user.uid === post.postedBy.id && (
        <Btn1 onClick={handleClick}>Remove post</Btn1>
        )}
        </PostGrid>

    </div>
  
    );
 
  
};

export default PostDetails;
