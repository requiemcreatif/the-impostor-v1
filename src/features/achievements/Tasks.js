import React from "react";
import styled from "styled-components";

const TaskDiv = styled.div`
  text-align: center;
  padding: 1rem;
  max-height: 10rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const Tasks = () => {
  return (
    <TaskDiv>
      <div>
        <h3>Achievement</h3>
      </div>
    </TaskDiv>
  );
};
export default Tasks;
