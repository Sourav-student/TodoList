import React from 'react';

const AddTodo = ({ openTodo }) => {

  return (
    <div className={`absolute top-20 bg-[#3030307b] w-2/3 h-2/4 max-md:w-[90%] max-md:left-5 backdrop-blur-sm rounded-xl ${openTodo ? "block" : "hidden"}`}>
      <h1 className="p-5 text-2xl font-serif font-semibold text-red-600">TodoList</h1>

      <form action={`${import.meta.env.VITE_API_URL}/TodoList`} method='post' className='p-3 space-y-7 pl-5'>
        <div>
          <label htmlFor="Todo">Write Your Todo : </label>
          <input type="text" name="todo" className='w-2/3 h-9 p-1' required />
        </div>
        <div>
          <label htmlFor="difficulty">Choose Difficulty : </label>
          <select name="difficulty" required>
            <option value="Normal">Normal</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button type="submit" className='p-2 m-2 ml-0 bg-green-400 font-bold rounded-lg'>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
