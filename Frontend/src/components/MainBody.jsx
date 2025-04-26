import React from 'react'
import { NavLink } from 'react-router';

const MainBody = () => {

  return (
    <div className="flex justify-center items-center max-md:items-start max-md:justify-start">
      <ul className="flex justify-around items-center bg-orange-500 w-2/4 max-md:w-[90%] max-md:ml-5 rounded-xl font-medium text-2xl max-md:text-sm p-2 ">
        <NavLink to="/">
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500' : ''}`}>All</li>
          )}
        </NavLink>

        <NavLink to="/Normal">
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500' : ''}`}>Normal</li>
          )}
        </NavLink>

        <NavLink to="/Medium">
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500' : ''}`}>Medium</li>
          )}
        </NavLink>

        <NavLink to="/Hard">
          {({ isActive }) => (
            <li className={`p-2 rounded-xl cursor-pointer ${isActive ? 'bg-yellow-500' : ''}`}>Hard</li>
          )}
        </NavLink>

      </ul>
    </div>
  )
}

export default MainBody
