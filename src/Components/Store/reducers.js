import React from 'react'
import { combineReducers } from 'redux'
import {todoReducer} from './todo-reducer'

export const rootReducer = combineReducers({
  todos: todoReducer
}); 