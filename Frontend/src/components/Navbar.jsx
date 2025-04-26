import React, {useState} from 'react'
import Plus from '/plus.svg'
import Minus from '/minus.svg'
import AddTodo from './AddTodo'

const Navbar = () => {
  const [openTodo, setOpenTodo] = useState(false)

  const handleOpen = () =>{
      setOpenTodo(openTodo => !openTodo)
  }

  return (
    <div className=' flex justify-around p-5'>
      <div>
        <h1 className='p-2 font-serif font-semibold text-2xl text-yellow-400'>TodoList</h1>
      </div>
      <div>
        <button className='flex justify-center items-center gap-2 bg-orange-500 p-2 rounded-xl font-sans font-medium' onClick={handleOpen}>
          <img src={!openTodo? Plus : Minus} alt="icon" />
          {openTodo?" Cancel Todo" : "Add Todo"}
        </button>
      </div>
      <AddTodo openTodo = {openTodo}/>
    </div>
  )
}

export default Navbar
