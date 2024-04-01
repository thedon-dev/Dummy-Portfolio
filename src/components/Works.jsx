import React from 'react'
import SectionTitle from "./SectionTitle"
import WorkItem from './WorkItem'
import works from '../data/works'
import Pic from '../assets/Dodge-car.jpg'

function Works() {
  return (
    <div id='works' className="py-12">
        <SectionTitle id='works'>Recent Works</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {works.map(work => (
            <WorkItem 
              key={work.item}
              imgUrl={Pic}
              title={work.title}
              tech={work.tech}
            />
          ))}
        </div>
    </div>
  )
}

export default Works