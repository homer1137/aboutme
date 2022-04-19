import React from 'react'
import { Container } from 'react-bootstrap'
import TodoListContainer from '../Components/Todolist/todoListContainer'

export default function Redux1TestPage() {
  return (
    <Container >
    <h1>Redux1</h1>
    <h2>ТoDos</h2>
    <TodoListContainer/>
    </Container>
  )
}
