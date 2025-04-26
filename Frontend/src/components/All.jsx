import React, { useEffect, useState } from 'react'

const All = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/TodoList`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setTodos(data)
      })
      .catch(err => console.error("Error fetching todos:", err));
  }, []);

  return (
    <>
      <div className='flex justify-center max-md:justify-normal max-md:ml-3 max-md:w-[90vw] items-center'>
        {
          todos.length == 0 ?
            <p className='pl-3 text-lg'>No Tasks are Remains</p> :
            <ul className='pl-1 w-[50vw] max-md:w-[100%]'>
              {
                todos.map((todo) => (
                  <li className='flex justify-between p-2 bg-stone-600 mb-3 mt-3 rounded-lg text-white font-light text-xl' key={todo._id}>
                    <strong>{todo.todo} </strong> <div><span className='text-sm'>{todo.difficulty}</span></div>
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
