import React, { useEffect, useState } from 'react'
import { FetchTodo, DeleteTodo, CompleteTodo } from '../api/todoApi';
import Delete from '/delete.svg'

const CompletedTodosList = ({ openCompletedTodos }) => {

  const [todos, setTodos] = useState([]);
  const [point, setPoint] = useState(0)

  //Fetching data from Backend by using useEffect
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchTodo();
      setTodos(data);
    }

    const completedCount = todos.filter(todo => todo.completed).length;
    setPoint(completedCount);

    fetchData();
  }, [todos]);

  //Deleting data from backend when user want(Delete request to Backend)
  const handleDelete = async (id) => {
    await DeleteTodo(id)
  }

  return (

    <div className={`flex flex-col items-center absolute bg-[#f4f4f9] w-[95vw] p-4 h-[80%] transition-all duration-100 ${!openCompletedTodos ? "hidden top-[-100%]" : "block top-20"}`}>
      <div className=' flex justify-evenly w-[100%] items-center'>
        <h1 className='text-xl text-[#111827] font-serif'>Completed Todos</h1>
        <span className='text-xl text-[#111827 ]'>{point}</span>
      </div>
      {
        <ul className='max-md:ml-4 w-[50vw] max-md:w-[100%]'>
          {
            todos.map((todo) => (
              todo.completed && (
                <li className='flex justify-between p-2 bg-[#ffffff] mb-3 mt-3 rounded-lg font-light items-center shadow-xl text-[#1e1e1e]' key={todo._id}>
                  <div className='flex flex-col gap-1 text-[18px]'>
                    <p className='max-sm:max-w-[200px] max-w-[290px] lg:max-w-[420px] xl:max-w-[500px]'>{todo.todo} </p>
                    <p className='text-[12px]'>{todo.createdAt}</p>
                  </div>
                  <div className='flex gap-1 flex-wrap'>
                    <span className={`text-sm font-medium`}>{todo.difficulty}
                    </span>
                    <span className=' cursor-pointer' onClick={() => handleDelete(todo._id)}><img src={Delete} alt="delete" />
                    </span>
                  </div>
                </li>)
            ))
          }
        </ul>
      }
    </div>
  )
}

export default CompletedTodosList
