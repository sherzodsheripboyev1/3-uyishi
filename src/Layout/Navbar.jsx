import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=" w-[80%] mx-auto py-4   items-center border-b border-gray-300">
      <ul className="flex justify-between  w-[50%] mx-auto"> 
        <li className='px-4 py-1 border-2 rounded-2xl '>
          <Link to="/post">Postlar</Link>
        </li>
         <li className='px-4 py-1 border-2 rounded-2xl '>
          <Link to="/">Albomlar</Link>
        </li>
        <li className='px-4 py-1 border-2 rounded-2xl '>
          <Link to="/user">Userlar</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar;