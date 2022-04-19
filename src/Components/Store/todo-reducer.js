import React from "react";
import { todoList } from "./MockStore";
import { ADD_TODO, DELETE_TODO, UPDATE_TEXT, UPDATE_DONE } from "./todo-actions";

export function todoReducer(state = todoList, action) {
  switch (action.type) {
    case ADD_TODO: {
      const item = action.payload;
      return [...state, item];
    }
    case DELETE_TODO: {
        const {ud} = action.payload;
        return[...state.filter(item=>item.ud !==ud)]
    }
    case UPDATE_TEXT: {
      const {ud, text} = action.payload;
      return [...state.map(item=>{
        if(item.ud ===ud) {
          return {...item, text: text}}
        else return (item)
       })];
    }

    case UPDATE_DONE: {
      const {ud, done} = action.payload;
      return [...state.map(item=>{
        if(item.ud ===ud) {
          return {...item, done }}
        else return (item)
       })];
    }

    default:
      return state;
  }
}
