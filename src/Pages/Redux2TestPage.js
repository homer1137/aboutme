import React from 'react'
import { Container } from 'react-bootstrap'
import AddItemContainer from '../Components/AddItem/AddItemContainer'
import EditorContainer from '../Components/Editor/editorContainer'


export default function Redux2TestPage() {
  return (
    <Container >
    <h1>Redux2</h1>
    <h2>Editor</h2>
    <EditorContainer/>
    <AddItemContainer/>
    </Container>
  )
}
