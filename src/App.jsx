import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

export default function App() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    const newTask = { id: uuidv4(), text: task }
    setTasks([...tasks, newTask])
  }

  function updateTask(id, newText){
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)))
  }

  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  )
}

