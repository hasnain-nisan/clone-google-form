import Switch from './Switch'
import DeleteBtn from './DeleteBtn'
import InputContents from './InputContents'
import { useState } from 'react'

const Card = () => {

    const [type, setType] = useState("short_answer");



    return (
        <div className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md'>
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
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value='short_answer' selected={type === "short_answer" ? true : false}>
                                Short answer
                            </option>
                            <option value='paragraph' selected={type === "paragraph" ? true : false}>
                                Paragraph
                            </option>
                            <option value='multiple_choice' selected={type === "multiple_choice" ? true : false}>
                                Multiple choice
                            </option>
                            <option value='checkboxes' selected={type === "checkboxes" ? true : false}>
                                Checkboxes
                            </option>
                            <option value='date' selected={type === "date" ? true : false}>
                                Date
                            </option>
                            <option value='time' selected={type === "titme" ? true : false}>
                                Time
                            </option>
                        </select>
                    </div>     
                </div>
                <InputContents 
                    type={type}
                />
            </form>
            <div className='flex items-center justify-end gap-3'>
                <DeleteBtn/>
                <Switch/>
            </div>
        </div>

    )
}

export default Card