import React from 'react'
import { NavLink } from 'react-router';

const CategoryList = () => {

  return (
    <div className="flex justify-center items-center max-md:items-start max-md:justify-start">
      <ul className="flex justify-around bg-[#e0e0e0] text-[#242424] w-2/4 max-md:w-[90%] max-md:ml-5 rounded-2xl font-medium text-2xl max-md:text-sm p-1 shadow">
        <NavLink to="/" title='all'>
          {({ isActive }) => (
            <li className={`p-2 rounded-2xl cursor-pointer ${isActive ? 'bg-[#4caf50]' : ''}`}>All</li>
          )}
        </NavLink>

        <NavLink to="/Normal" title='normal'>
          {({ isActive }) => (
            <li className={`p-2 rounded-2xl cursor-pointer ${isActive ? 'bg-[#03a9f4]' : ''}`}>Normal</li>
          )}
        </NavLink>

        <NavLink to="/Medium" title='medium'>
          {({ isActive }) => (
            <li className={`p-2 rounded-2xl cursor-pointer ${isActive ? 'bg-[#ff9800]' : ''}`}>Medium</li>
          )}
        </NavLink>

        <NavLink to="/Hard" title='hard'>
          {({ isActive }) => (
            <li className={`p-2 rounded-2xl cursor-pointer ${isActive ? 'bg-[#f44336]' : ''}`}>Hard</li>
          )}
        </NavLink>
      </ul>
    </div>
  )
}

export default CategoryList
