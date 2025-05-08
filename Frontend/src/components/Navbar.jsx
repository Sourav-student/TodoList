import React, { useState } from 'react'
import Plus from '/plus.svg'
import Minus from '/minus.svg'
import Done from '/done.svg'
import AddTodo from './AddTodo'
import CompletedTodosList from './CompletedTodosList'

const Navbar = () => {
  const [openTodo, setOpenTodo] = useState(false)
  const [openCompletedTodos, setOpenCompletedTodos] = useState(false)

  const handleOpen = () => {
    setOpenTodo(openTodo => !openTodo)
  }

  const handleCompletedTodosList = () => {
    setOpenCompletedTodos(openCompletedTodos => !openCompletedTodos)
  }

  return (
    <div className=' flex justify-around p-5'>
      <div>
        <h1 className='p-2 font-semibold text-2xl text-[#1f2937]'>TodoList</h1>
      </div>
      <div className='flex gap-1'>
        <button className="flex text-sm bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-semibold px-2 py-2 rounded-lg shadow-md transition duration-200" onClick={handleOpen}>
          <img src={!openTodo ? Plus : Minus} alt="icon" />
          {openTodo ? " Cancel Todo" : "Add Todo"}
        </button>
        <button className='flex text-sm bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-semibold px-2 py-2 rounded-lg shadow-md transition duration-200' onClick={handleCompletedTodosList}>
          <img src={openCompletedTodos ? Minus : Done} title='completed todos' alt="icon" />
        </button>
      </div>

      {/*Parse Parameters to openTodo */}
      <AddTodo openTodo={openTodo} />

      {/*Parse Parameters to openCompletedTodos */}
      <CompletedTodosList openCompletedTodos={openCompletedTodos} />
    </div>
  )
}

export default Navbar
