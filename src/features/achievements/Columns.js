import React from "react";
import Tasks from "./Tasks";
import styled from "styled-components";

const ColumnDiv = styled.div`
  text-align: center;
  padding: 1rem;
  max-height: 10rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  border: 1px solid black;
  border-radius: 10px;

  h3 {
    font-size: 1em;
    font-weight: 500;
  }
`;

const Column = () => {
  return (
    <ColumnDiv>
      <div>
        <h3>Achievement</h3>
        <Tasks />
      </div>
      <div>
        <h3>Reflections</h3>
        <Tasks />
      </div>
      <div>
        <h3>State of mind</h3>
        <Tasks />
      </div>
    </ColumnDiv>
  );
};

export default Column;
