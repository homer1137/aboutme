import React, { useInsertionEffect } from "react";
import Editor from "./Editor";
import { useSelector } from "react-redux";
import { DELETE_TODO, UPDATE_TEXT, UPDATE_DONE  } from "../Store/todo-actions";
import { useDispatch } from "react-redux";

export default function EditorContainer() {

    const dispatch = useDispatch();




  const HandlerTextChange = (item, value) => {
    dispatch({
      type: UPDATE_TEXT,
      payload: {
        ud: item.ud,
        text: value,
      },
    });
  };

  const HandlerToggle = (item, value) => {
    dispatch({
      type: UPDATE_DONE,
      payload: {
          ud: item.ud,
          done: value, 
      },
    });
  };

  const HandleRemove = (item) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
          ud: item.ud,
      },
    });
  };

  const items = useSelector((store)=>{
      console.log('store', store)
    return (store.todos)})

 


  return (
    <Editor
      onTextChange={HandlerTextChange}
      onToggle={HandlerToggle}
      onRemove={HandleRemove}
        items={items}
    />
  );
}
