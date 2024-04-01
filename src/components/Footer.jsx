import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg flex flex-col'>
        <a className='block text-xl md:text-2xl font-semibold' href="#hero">Victor Jack</a>
        <a className=' text-small md:text-md hover:text-indigo-500' href="mailto:vjack878@gmail.com">mail</a>
        <p className='text-xs  mt-2 text-gray-500'>
            @Victor Jack {new Date().getFullYear()}. All Rights Reserved
        </p>
    </div>
  )
}

export default Footer