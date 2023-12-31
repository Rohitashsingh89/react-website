import React from 'react';
import Hero from './Hero';

function About() {
  return (
    <>
    <div className='my-5 container'>      
    <div className='row'>
      <Hero
      title="Grow your business with"
      imgSrc="https://github.com/Rohitashsingh89/react-website/assets/93479842/69c1deac-554b-4145-85d5-418f34423477"
      author="Rohitash Singh"
      about="We are team of talented developer making you business online"
      redirected="/services"
      />  
      </div>
      </div>
    </>
  )
}

export default About;