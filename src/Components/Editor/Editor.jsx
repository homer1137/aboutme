import React from 'react'
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from 'react';



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

export default function Editor({onTextChange, onToggle, onRemove, items}) {
   
  return (
    <div>
    {items.map((item) => { 
          
      return( 
         <FlexDiv key={item.ud}>
           <input type="checkbox" checked={item.done} onChange={(e)=>onToggle(item, e.target.checked)} />
           <input type='text' value={item.text} onChange={(e)=>onTextChange(item, e.target.value)}></input>
           <Button variant="danger" onClick={()=>{onRemove(item)}}>Удалить</Button>
         </FlexDiv>
       )
     
     } )}
    </div>
  )
}
