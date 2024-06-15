import React, { useState } from 'react'

export default function TaskItem({ task, updateTask, deleteTask }){
  const [isEditing, setIsEditing] = useState(false)
  const [newTask, setNewTask] = useState(task.text)

  const handleUpdate = () => {
    updateTask(task.id, newTask)
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-slate-900 p-2 my-2">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-1 flex-grow mr-2"
        />
      ) : (
        <span className="text-2xl font-semibold text-white-900">{task.text}</span>
      )}
      <div>
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white p-1 rounded mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="btn-edit btn-mobile"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="btn-delete btn-mobile"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

