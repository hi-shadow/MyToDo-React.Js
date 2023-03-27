import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
  return (
    <>
    
<div className="row mx-5 my-3 ">


{
  props.todos.map((element)=>{
return <div className="col-md-4" key={element.sno}>
<TodoItem todo = {element} onDelete = {props.onDelete} addTodo={props.addTodo}/>
</div>
  })
}



</div>

    </>
  )
}

export default TodosList
