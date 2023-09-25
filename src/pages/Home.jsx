import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex gap-10 flex-col justify-center items-center bg-gray-100'>
            <h1 
                className='cursor-pointer font-logo text-5xl text-red-600 hover:text-red-800 hover:animate-pulse'
                onClick={() => navigate('/')}
            >
                Easy Form
            </h1>
            <div className='flex gap-5'>
                <button 
                    className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105'
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
                <button 
                    className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105'
                    onClick={() => navigate('/registration')}
                >
                    Registration
                </button>
            </div>
        </div>
    )
}

export default Home