import React from 'react'
import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className='bg-blue-500 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <h1 
            className='cursor-pointer font-logo text-2xl font-semibold text-red-600 hover:text-red-800 hover:animate-pulse'
            // onClick={() => navigate('/')}
           >
            Easy Form
           </h1>
          {/* Navigation Links */}
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='flex items-center'>
                <FaHome className='mr-2' />
                Home
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <FaUser className='mr-2' />
                Profile
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <FaEnvelope className='mr-2' />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar