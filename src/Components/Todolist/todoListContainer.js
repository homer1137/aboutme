import React from "react";

import TodoList from "./TodoList";
import { useSelector } from "react-redux";

export default function TodoListContainer() {
  const items = useSelector((state) => {
    return state.todos;
  });

  const doneItems = items.filter((item) => item.done);
  const todoItems = items.filter((item) => !item.done);

  return <TodoList doneItems={doneItems} todoItems={todoItems} />;
}
