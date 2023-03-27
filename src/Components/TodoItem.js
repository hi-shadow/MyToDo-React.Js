import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCheckDouble, faEye, faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const TodoItem = (props) => {

  const[AddTitle , SetAddTitle] = useState("")
  const[AddDescription , SetAddDescription] = useState("")
  const  submit = async (e)=>{
    e.preventDefault()
    
    await props.addTodo(AddTitle , AddDescription)
    SetAddTitle("")
     SetAddDescription("")
   

  }

  return ( 
    <>
     
    <div className="card bg-light my-3 p-1 shadow-5-strong">
  <div className="card-body">
    <h5 className="card-title">{props.todo.title}</h5>
    <p className="card-text">{props.todo.description}</p>
    <div className="d-grid gap-2">
  <button className="btn btn-success btn-sm py-0 " type="button" title='Add ToDo' data-mdb-toggle="modal" data-mdb-target="#AddTodoModal"  style={{display : props.todo.sno > 1 ? "none" :""}}><FontAwesomeIcon icon={faPlusSquare} /></button>
</div>
    <div className={`d-flex pt-2 pb-0 justify-content-end`}   >
 <FontAwesomeIcon icon = {faEye} className="me-2 text-primary " style={{cursor : "pointer",display : props.todo.sno === 1 ? "none" :""}} title='View'/>
  <FontAwesomeIcon icon={faTrash} className="mx-2 text-danger" style={{cursor : "pointer" , display : props.todo.sno === 1 ? "none" :""}} onClick={()=>{props.onDelete(props.todo)}} title='Delete' />
    <FontAwesomeIcon icon={faCheckDouble} className="mx-2 text-success" style={{cursor : "pointer",  display : props.todo.sno === 1 ? "none" :""}} title='Mark as Done' />

  </div>
  </div>

</div>


{/* ADD TODO MODAL */}

<div className="modal fade" id="AddTodoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add ToDo</h5>
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={submit}>
      <div className="modal-body">

  <div className="form my-2">
    <label className="form-label m-0" htmlFor="form4Example1">Title : </label>
    <input type="text"  id="form4Example1" className="form-control" name='AddTitle' value={AddTitle} onChange = {(e)=>{SetAddTitle(e.target.value)}}/>
  </div>
  <div className="form- my-2">
    <label className="form-label m-0" htmlFor="form4Example3">Message : </label>
    <textarea className="form-control" id="form4Example3" rows="4" name='AddDescription' value={AddDescription} onChange={(e)=>{SetAddDescription(e.target.value)}}></textarea>
  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success"  data-mdb-dismiss="modal" disabled = {(!AddTitle || !AddDescription)? true : false}>Add ToDo</button>
      </div>
      </form>
    </div>
  </div>
</div>

{/* DELETE TODO MODAL */}

<div className="modal fade" id="DeleteTodoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger"  data-mdb-dismiss="modal">Delete</button>
      </div>

    </div>
  </div>
</div>
</>
  )
}

export default TodoItem
