import React from 'react'
import { MdDelete } from 'react-icons/md'

const DeleteBtn = () => {
  return (
    <div className='relative group'>
        <button className='text-red-300 text-xl rounded-full hover:text-red-600 focus:outline-none flex items-center'>
            <MdDelete/>
        </button>
        <div className="opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 absolute left-1/2 transform -translate-x-1/2 bottom-full transition-opacity duration-200">
            Delete
        </div>
    </div>
  )
}

export default DeleteBtn