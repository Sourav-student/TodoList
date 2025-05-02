import React, { useEffect, useState } from 'react'
import { FetchTodo, DeleteTodo, CompleteTodo } from '../api/todoApi';
import CompleteImg from '/completeImg.svg'
import Delete from '/delete.svg'

const Hard = () => {
  const [todos, setTodos] = useState([]);


  //Fetching data from Backend by using useEffect
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchTodo();
      setTodos(data);
    }

    fetchData();
  }, [todos]);

  //Deleting data from backend when user want(Delete request to Backend)
  const handleDelete = async (id) => {
    await DeleteTodo(id)
  }

  //Completed when click on right(Patch request to Backend)
  const handleComplete = async (id) => {
    await CompleteTodo(id)
  }


  return (
    <div className='flex justify-center max-md:justify-normal max-md:ml-3 max-md:w-[90vw] items-center'>
      {
        todos.length == 0 ?
          <p className='pl-3 text-xl text-white'>No Hard Todos are found</p> :
          <ul className='max-md:ml-4 w-[50vw] max-md:w-[100%]'>
            {
              todos.map((todo) => (
                todo.difficulty != "Hard" || todo.completed === true ? "" :
                  <li className='flex justify-between p-2 bg-[#2b2b2b] mb-3 mt-3 rounded-lg text-white font-light items-center text-xl shadow-xl' key={todo._id}>
                    <p>{todo.todo} </p> <div className='flex gap-1 flex-wrap'><span className='text-sm text-red-600 font-medium'>{todo.difficulty}</span><span className=' cursor-pointer' onClick={() => handleDelete(todo._id)}><img src={Delete} alt="delete" /></span>
                      <span className=' cursor-pointer' onClick={() => handleComplete(todo._id)}><img src={CompleteImg} alt="complete" />
                      </span>
                    </div>
                  </li>
              ))
            }
          </ul>
      }

    </div>
  )
}

export default Hard
