import React from 'react'
import SectionTitle from './SectionTitle'
import myImage from '../assets/Tokito.jpg'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>About</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit repellat exercitationem beatae, optio non, dolor, sunt sint eveniet fuga explicabo quos iste natus veritatis quasi! Unde, eius reiciendis consectetur atque quisquam quidem tenetur quia!
            </p>
            <a href="mailto:viktoh7351@gmail.com"
                className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
            >Victor Jack</a>
        </div>
        <img src={myImage} alt="" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About