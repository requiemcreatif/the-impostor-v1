import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// STYLES

const Container = styled.div`
  //text-align: center;
  margin: 5rem auto;
  //padding: 2rem 8rem;

  @media (max-width: 768px) {
    p {
      padding: 2rem 2rem;
    }
  }
`;

const PostGrid = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  //padding: 0 4rem;
  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
    width: 100%;
  }
  a {
    background-color: #f7f7ff;
    padding: 2rem;
    padding-bottom: 4rem;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    text-decoration: none;
    color: #000;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
    color: #053651;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e63946;
  }

  p {
    font-size: 0.8em;
    color: #000;
  }

  ul {
    margin: 1rem 0;
    display: flex;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Btn2 = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: solid 1px #e63946;
  border-radius: 0.5rem;
  //background: #E0F4FF;
  background: transparent;
  color: #e63946;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background: #e63946;
    border: solid 1px #e63946;
    color: #e0f4ff;
    font-weight: 300;
  }
`;

const PostList = ({ posts }) => {
  return (
    <div>
      <Container>
        <p className="textarea">
          Welcome to Imsptr community!! Here you will find all the information you need about
          Impostor syndrome. <br /> Our wonderful community is here to help you. You will be able to
          read previous articles and posts or to create a new one. <br /> Feel free to share your
          experience with other users. Remember, You are not alone!!
        </p>
      </Container>
      <PostGrid>
        {posts.length === 0 && <p>There is no posts at this moment</p>}
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <CardContent>
              <div>
                <img src="" alt="" />
              </div>
              <h2>{post.name}</h2>
              <p>Date: {post.date.toDate().toDateString()}</p>
              <Btn2>Read more</Btn2>
            </CardContent>
          </Link>
        ))}
      </PostGrid>
    </div>
  );
};

export default PostList;
