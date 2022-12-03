import React from "react";
import { useState } from "react";
import { timestamp } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import formatDistance from "date-fns/formatDistanceToNow";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;
  margin: 4rem auto;
  /* padding: 0 4rem; */

  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: left;
  }

  span {
    font-size: 1em;
    color: #000;
    font-weight: 400;
    font-family: "Blinker", sans-serif;
  }

  textarea {
    min-height: 6rem;
    width: 35rem;
  }

  @media (min-width: 768px) {
    textarea {
      width: 50rem;
    }
  }
`;

const Btn1 = styled.button`
  margin-top: 2rem;
  width: 15rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  border: solid 1px #fe5f55;
  border-radius: 0.5rem;
  background: #fe5f55;
  color: #f7f7ff;
  font-weight: 300;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background: #577399;
    color: #f7f7ff;
    border: #577399 solid 1px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30rem;
    list-style: none;
    margin: 0 auto;
  }

  hr {
    width: 100%;
    border-top: 0.5px solid #495867;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: left;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #ffffff;
  }
  .name {
    font-weight: 600;
    padding-bottom: 1rem;
  }

  @media (min-width: 768px) {
    ul {
      width: 50rem;
    }
  }
`;

const Comments = ({ post }) => {
  const { updateDocument, response } = useFirestore("posts");
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentObj = {
      displayName: user.displayName,
      content: comment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(post.id, {
      comments: [...post.comments, commentObj],
    });
    if (!response.error) {
      setComment("");
    }
  };

  return (
    <Wrapper>
      <ul>
        <h3>COMMENTS</h3>
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <li key={comment.id}>
              <div>
                <p className="name">{comment.displayName} says...</p>
                <hr />
              </div>
              <div>
                <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
              </div>
              <div>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
      <Form onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea required value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <Btn1>Add comment</Btn1>
      </Form>
    </Wrapper>
  );
};

export default Comments;
