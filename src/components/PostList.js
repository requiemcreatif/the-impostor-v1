import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostGrid = styled.div`
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    height: 40rem;
    grid-gap: 2rem;
    padding: 0 4rem;

    @media (max-width: 768px) {
        height: auto;
        width: 100%;
    }
    a {
        background-color: #F7F7FF;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        text-decoration: none;
        color: #000;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 500;
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

const Btn2 = styled.button`
    width: 10rem;
    height: 3rem;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: solid 1px #101B21;
    border-radius: 0.5rem;
    //background: #E0F4FF;
    background: transparent;
    color: #101B21;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background: #053651;
        border: solid 1px #053651;
        color: #E0F4FF;
    }`


const PostList = ({posts}) => {
  return( 
    <PostGrid>

        {posts.length === 0 && <p>There is no posts at this moment</p>}  
        {posts.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id}>
            <div>
                <div>
                </div>
                <h2>{post.name}</h2>
                <p>Date: {post.date.toDate().toDateString()}</p>
                <Btn2>Read more</Btn2>
            </div>
            </Link>
            
        ))}  
    </PostGrid>);
};

export default PostList;
