import { useEffect, useState } from 'react'
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
      <div className='flex justify-center max-md:justify-normal max-md:ml-3 max-md:w-[90vw] items-center text-[#1e1e1e]'>
        {
          todos.length == 0 ?
            <p className='pl-3 text-xl'>No Todos are found</p> :
            <ul className='max-md:ml-4 w-[50vw] max-md:w-[100%]'>
              {
                todos.map((todo) => (
                  todo.completed === true ? "" :
                    <li className='flex justify-between p-2 bg-[#ffffff] mb-3 mt-3 rounded-lg font-light items-center shadow-xl li' key={todo._id}>
                      <div className='flex flex-col gap-1 sm:text-xl text-[16px]'>
                        <p className='max-w-[500px] max-xl:max-w-[400px] max-lg:max-w-[280px] max-md:max-w-[450px] max-sm:max-w-[205px]'>{todo.todo} </p>
                        <p className='text-[12px]'>Date - {todo.createdAt.slice(0, 10)}</p>
                      </div>
                      <div className='flex gap-1 flex-wrap'>
                        <span className='text-[15px] max-sm:text-[12px]'>{todo.difficulty}</span><span className=' cursor-pointer' onClick={() => handleDelete(todo._id)}><img className='max-md:w-5' src={Delete} alt="delete" />
                        </span>
                        <span className=' cursor-pointer' onClick={() => handleComplete(todo._id)}><img className='max-md:w-5' src={CompleteImg} alt="complete" />
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
