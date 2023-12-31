import React from 'react';
import { NavLink } from 'react-router-dom';

function Hero( props ) {
  return (
    <>
        <div className='container' style={{marginTop: "5vh"}} >
            <div className='row'>
                <div className='col-lg-6 my-auto'>
                    <h1>{props.title}</h1>
                    <h1 className='text-primary'>{props.author}</h1>
                    <p>{props.about}</p>
                    <NavLink to={props.redirected} ><button className='btn btn-primary'>Get Started</button></NavLink>
                </div>
                <div className='col-lg-6'>
                    <img src={props.imgSrc} alt='home page images' className='img-fluid' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;