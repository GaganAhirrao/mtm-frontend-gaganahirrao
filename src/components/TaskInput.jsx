import React, { useState } from 'react'
import Alert from './Alert'

export default function TaskInput({ addTask }){
  const [task, setTask] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      addTask(task)
      setTask('')
    } else {
      setShowAlert(true)
    }
  };

  return (
    <div>
      {showAlert && (
        <Alert
          message="Task cannot be empty!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col md:flex-row">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 mb-2 md:mb-0 md:mr-2 flex-grow"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  )
}
