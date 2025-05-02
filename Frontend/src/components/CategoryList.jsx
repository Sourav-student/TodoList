import React from 'react'
import { NavLink } from 'react-router';

const CategoryList = () => {

  return (
    <div className="flex justify-center items-center max-md:items-start max-md:justify-start">
      <ul className="flex justify-around bg-orange-500 w-2/4 max-md:w-[90%] max-md:ml-5 rounded-xl font-medium text-2xl max-md:text-sm p-1 shadow">
        <NavLink to="/" title='all'>
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500 box-shawdom' : ''}`}>All</li>
          )}
        </NavLink>

        <NavLink to="/Normal" title='normal'>
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500 box-shawdom' : ''}`}>Normal</li>
          )}
        </NavLink>

        <NavLink to="/Medium" title='medium'>
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500 box-shawdom' : ''}`}>Medium</li>
          )}
        </NavLink>

        <NavLink to="/Hard" title='hard'>
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500 box-shawdom' : ''}`}>Hard</li>
          )}
        </NavLink>
      </ul>
    </div>
  )
}

export default CategoryList
