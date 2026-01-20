import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center pt-5 pb-5 mt-5 mb-5 border-bottom'>
                <h1 className='fs-3 pb-3'>Zerodha Products</h1>
                <h2 className='fs-5 text-muted pb-3'>Sleek, modern, and intuitive trading platforms</h2>
                <p className='pb-5'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right" ></i> </a> </p>
            </div>
        </div>
     );
}

export default Hero;