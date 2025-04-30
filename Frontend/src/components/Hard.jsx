import React, { useEffect, useState } from 'react'
import { FetchTodo, DeleteTodo } from '../api/todoApi';
import Delete from '/delete.svg'

const Hard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchTodo();
      setTodos(data);
    }

    fetchData();
  }, [todos]);

  const handleDelete = async (id) => {
    DeleteTodo(id)
  }

  return (
    <div className='flex justify-center max-md:justify-normal max-md:ml-3 max-md:w-[90vw] items-center'>
      {
        todos.length == 0 ?
          <p className='pl-3 text-lg'>No Todos are found</p> :
          <ul className='max-md:ml-4 w-[50vw] max-md:w-[100%]'>
            {
              todos.map((todo) => (
                todo.difficulty != "Hard" ? <p>No Hard todo</p> :
                  <li className='flex justify-between p-2 bg-stone-700 mb-3 mt-3 rounded-lg text-white font-light text-xl' key={todo._id}>
                    <p>{todo.todo} </p> <div><span className='text-sm text-red-600 font-medium'>{todo.difficulty}</span><span className=' cursor-pointer' onClick={() => handleDelete(todo._id)}><img src={Delete} alt="delete" /></span></div>
                  </li>
              ))
            }
          </ul>
      }

    </div>
  )
}

export default Hard
