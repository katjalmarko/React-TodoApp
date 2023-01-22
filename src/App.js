import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => 
    task.id !== id))
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true };
        } else {
          return task;
        }
      })
    )
  }  

  const handleSubmit = (event) => {
    event.preventDefault()
    setNewTask("")
  }

  return (
    <div className="App">
      <div className='addTask'>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value ={newTask} />
        <button onClick={addTask}>Add Task</button>
        </form>
      </div>

      <div className='list'>
        {todoList.map((task) => {
          return ( 
          <Task taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
                /> 
          )})}
      </div>
    </div>
  );
}

export default App;
