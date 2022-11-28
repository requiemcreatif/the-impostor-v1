import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostGrid = styled.div`
    margin: 4rem auto;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    height: 50rem;
    grid-gap: 2rem;
    padding: 0 4rem;

    @media (max-width: 768px) {
        height: auto;
        width: 100%;
    }
    a {
        background-color: #fff;
        padding: 2rem;
        border-radius: 5px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
        text-decoration: none;
        color: #000;
    }

    h4 {
        font-size: 1em;
        color: #000 ;
    }

    p {
        font-size: 0.8em;
        color: #000;
    }

    ul {
        margin: 1rem 0;
        display: flex;
    }
`


const PostList = ({posts}) => {
  return( 
    <PostGrid>
        {posts.length === 0 && <p>There is no posts at this moment</p>}  
        {posts.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id}>
                <h4> {post.name}</h4>
                <p>Date: {post.date.toDate().toDateString()}</p>

            </Link>
        ))}  
    </PostGrid>);
};

export default PostList;
