import React from 'react'

export default function Alert({ message, onClose }){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-sky-900 p-4 rounded shadow-md text-center">
        <p className='text-white'>{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white p-2 mt-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

