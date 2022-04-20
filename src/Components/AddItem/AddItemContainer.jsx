import React from "react";
import AddItem from "./AddItem";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../Components/Store/todo-actions";

export default function AddItemContainer() {
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(addTodo(text))
    // dispatch({
    //   type: ADD_TODO,
    //   payload: {
    //     ud: uuid(),
    //     text: text,
    //     done: false,
    //   },
    // });
  };

  return <AddItem onAdd={handleAdd} />;
}
