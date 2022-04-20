import { v4 as uuid } from "uuid";


export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_DONE = 'UPDATE_DONE';


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            ud: uuid(),
            text: text,
            done:false,
        }
    }
}

export const updateTodoText = (ud, text) => {
    return {
        type: UPDATE_TEXT,
        payload: {
            ud: ud,
            text: text,
        }
    }
}

export const deleteTodo = (ud) => {
    return {
        type: DELETE_TODO,
        payload: {
            ud: ud, 
        }
    }
}

export const updateDone = (item, done) => {
    return {
        type: UPDATE_DONE,
        payload: {
            ud: item.ud,
            done: done, 
        }
    }
}