import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';

function Services() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <h1 className='text-center my-3'>Our Services</h1>

                    {ServiceData.map((service, index) => (
                        <Card service={service} key={index} />
                    ))}

            </div>
        </div>
    </>
  )
}

export default Services;