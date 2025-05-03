import React, { useEffect, useState } from 'react'
import { FetchTodo, DeleteTodo, CompleteTodo } from '../api/todoApi';
import Delete from '/delete.svg'
import CompleteImg from '/completeImg.svg'

const All = () => {
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
    <>
      <div className='flex justify-center max-md:justify-normal max-md:ml-3 max-md:w-[90vw] items-center'>
        {
          todos.length == 0 ?
            <p className='pl-3 text-xl text-white'>No Todos are found</p> :
            <ul className='max-md:ml-4 w-[50vw] max-md:w-[100%]'>
              {
                todos.map((todo) => (
                  todo.completed === true ? "" :
                    <li className='flex justify-between p-2 bg-[#2b2b2b] mb-3 mt-3 rounded-lg text-white font-light items-center text-xl shadow-xl' key={todo._id}>
                      <div className='flex flex-col gap-1'>
                        <p>{todo.todo} </p>
                        <p className='text-[14px]'>{todo.createdAt}</p>
                      </div>
                      <div className='flex gap-1 flex-wrap'>
                        <span className={`text-sm font-medium ${todo.difficulty === "Hard" ? "text-[#bd0000]" : "text-white"}`}>{todo.difficulty}
                        </span>
                        <span className=' cursor-pointer' onClick={() => handleDelete(todo._id)}><img src={Delete} alt="delete" />
                        </span>
                        <span className=' cursor-pointer' onClick={() => handleComplete(todo._id)}><img src={CompleteImg} alt="complete" />
                        </span>
                      </div>
                    </li>
                ))
              }
            </ul>
        }
      </div>
    </>
  )
}

export default All
