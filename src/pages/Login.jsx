import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex gap-10 flex-col justify-center items-center bg-gray-100'>
            <h1 
                className='cursor-pointer font-logo text-5xl text-red-600 hover:text-red-800 hover:animate-pulse'
                onClick={() => navigate('/')}
            >
                Easy Form
            </h1>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h3 className='text-center mb-5 text-xl text-blue-600 font-semibold'>
                    Welcome back! Please login.
                </h3>
                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='email'
                />
                </div>
                <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Password
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='Password'
                />
                </div>
                <div className='flex gap-3 items-center justify-between'>
                <button
                    className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105'
                    type='button'
                >
                    Login
                </button>
                <button
                    className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105'
                    type='button'
                    onClick={() => navigate('/registration')}
                >
                    Registration
                </button>
                {/* <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
                    Forgot Password?
                </a> */}
                </div>
            </div>
            <p className='text-center text-gray-500 text-xs'>
                &copy; 2023 Easy Form. All rights reserved.
            </p>
        </div>
    );
}

export default Login;
