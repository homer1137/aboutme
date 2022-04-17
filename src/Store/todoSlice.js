import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice ({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
        
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
              })

        },
        removeTodo (state, action){
            state.todos=state.todos.filter((item)=>{
                return (item.id !==action.payload)})
            
                
        },
        toggleTodoComplete(state, action) {
            state.todos = state.todos.map((todo) => {
                    if (todo.id !== action.payload) return todo;
                    return {
                      ...todo,
                      completed: !todo.completed,
                    }})

        }
    },

})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;