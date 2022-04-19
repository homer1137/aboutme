import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  justify-content: space-around;
  margin: 2rem;
  padding: 1rem;
  align-items: flex-start;
  border: 0.2rem solid lightblue;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px darkgrey;
`;

export default function TodoList({ doneItems, todoItems }) {
 
  
  const DoteTodo = () => {
    return doneItems.map((item) => (
      <FlexDiv key={item.ud}>
        
        <h3>{item.text}</h3>
        
      </FlexDiv>
    ));
  };

  const NotDoteTodo = () => {
    return todoItems.map((item) => (
      <FlexDiv key={item.ud}>
        
        <h3>{item.text}</h3>
        
      </FlexDiv>
    ));
  };

  return (
    <>
      <FlexDiv>
        <div>
          <h2>Done</h2>
          <DoteTodo />
        </div>
        <div>
          <h2>Not Done</h2>
          <NotDoteTodo />
        </div>
      </FlexDiv>
    </>
  );
}
