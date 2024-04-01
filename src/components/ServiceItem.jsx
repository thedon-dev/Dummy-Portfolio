import React from 'react'

function ServiceItem({title, description, theme}) {
  return (
    <div className='bg-slate-600 dark:bg-slate-800 hover:bg-slate-700 hover:-translate-y-2 transition transform rounded-md p-5'>
        <h1 className={`font-semibold text-lg text-gray-200 mb-1`}>{title}</h1>
        <p className='text-md text-gray-300'>{description}</p>
    </div>
  )
}

export default ServiceItem