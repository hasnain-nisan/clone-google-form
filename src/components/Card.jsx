import React from 'react'
import {MdDelete} from 'react-icons/md'
import Switch from './Switch'
import DeleteBtn from './DeleteBtn'

const Card = () => {
  return (
    <div className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md'>
        {/* <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2> */}
        <form>
            <div className='mb-5 flex gap-5 w-full'>
                <div className='w-1/2'>
                    <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='question_title'>
                        Title
                    </label>
                    <input
                        className='w-full p-2 border-b rounded-lg border-gray-300 focus:outline-none focus:border-b-gray-600'
                        type='text'
                        id='question_title'
                        placeholder='Enter the question'
                        name='question_title'
                    />
                </div>
                <div className='w-1/2'>
                    <label className='block text-gray-600 text-sm font-semibold mb-2' htmlFor='question_type'>
                        Type
                    </label>
                    <select
                        className='w-full p-2 border-b rounded-lg border-gray-300 focus:outline-none focus:border-b-gray-600'
                        id='question_type'
                    >
                        <option value='short_answer'>Short answer</option>
                        <option value='paragraph'>Paragraph</option>
                        <option value='multiple_choice' selected>Multiple choice</option>
                        <option value='checkboxes'>Checkboxes</option>
                        <option value='date'>Date</option>
                        <option value='time'>Time</option>
                    </select>
                </div>
            </div>
        </form>
        <div className='flex items-center justify-end gap-3'>
            <DeleteBtn/>
            <Switch/>
        </div>
    </div>

  )
}

export default Card