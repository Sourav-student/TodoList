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
        <h1 className='p-2 font-serif font-semibold text-2xl text-[#77ff00]'>TodoList</h1>
      </div>
      <div className='flex gap-1'>
        <button className='flex justify-center items-center gap-2 bg-orange-500 p-1 rounded-xl font-sans font-medium cursor-pointer' onClick={handleOpen}>
          <img src={!openTodo ? Plus : Minus} alt="icon" />
          {openTodo ? " Cancel Todo" : "Add Todo"}
        </button>
        <button className='flex justify-center items-center bg-orange-500 p-1 rounded-xl font-sans font-medium cursor-pointer' onClick={handleCompletedTodosList}>
          <img src={openCompletedTodos ? Minus : Done} className='w-10' title='completed todos' alt="icon" />
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
