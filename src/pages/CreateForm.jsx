import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function CreateForm() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar/>

      {/* Main Content */}
      <div className='container mx-auto mt-8 p-4'>
        <Card/>
      </div>
    </div>
  );
}

export default CreateForm;
