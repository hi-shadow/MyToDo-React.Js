
import React, { useState , useEffect } from 'react'
import Header from './Components/Header'
import TodosList from './Components/TodosList'

const App = () => {
  let initTodo;
  if ( localStorage.getItem("todos")===null) {
     initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo)=>{
  console.log("I AM IN DELETE" ,todo)
  Settodos(todos.filter((e)=>{
return e !== todo 
  }))
    localStorage.setItem("todos" , JSON.stringify(todos))
}

const addTodo = (AddTitle , AddDescription) =>{
  Settodos ([...todos , {
    sno : todos.length ===0 ? 1 :   todos[todos.length -1].sno + 1,
    title : AddTitle , 
    description : AddDescription
  }])
}
  const [todos , Settodos] = useState([
    { sno : 1 , title : "Add Todo ? " , description : "Please Click on + Icon to add a new todo"} 
  ] , initTodo)
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])


  return (
    <>
  <Header title="My ToDo's"/>
  <TodosList todos = {todos} onDelete ={onDelete} addTodo={addTodo}/>
    </>
  )
}

export default App
