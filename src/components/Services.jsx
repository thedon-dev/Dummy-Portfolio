import React from 'react'
import SectionTitle from './SectionTitle'
import services from '../data/services'
import ServiceItem from './ServiceItem'

function Services({theme}) {
  return (
    <div className='py-12'>
      <SectionTitle>Our Services</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map(service => (
          <ServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
          >
          </ServiceItem>
        ))}
      </div>
    </div>
  )
}

export default Services