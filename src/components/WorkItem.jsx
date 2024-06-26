import React from 'react'

function WorkItem({imgUrl, title, tech}) {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden'>
        <img src={imgUrl} alt={title} className='w-full h-36 md:h-48 object-cover'/>
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {Array.isArray(tech) && tech.length > 0 && tech.map((item, index) => (
                    <span key={index}
                        className='inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-sm'
                    >
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </div>
  )
}

export default WorkItem