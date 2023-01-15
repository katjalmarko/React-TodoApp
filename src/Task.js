import React from 'react'
import "./Task.css"

const Task = (props) => {
  return (
    <div className='task'
    style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
    <h1>{props.taskName}</h1>
    <button className='first' 
    onClick={() => props.completeTask(props.id)}>
      Complete
      </button>
    <button className='second'
    onClick={() => props.deleteTask(props.id)}>
      X
      </button>
    </div>
  )
}

export default Task