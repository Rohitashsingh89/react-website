import React from 'react';

function Card({ service }) {
    return (
        <>
        <div className='col-lg-4 mb-3'>
            <div class="card">
                <img src={service.imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{service.title}</h5>
                        <p class="card-text">{service.description}</p>
                        <a href="/contact" class="btn btn-primary">Check Now</a>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Card;