import React from 'react';

function RightSection({productname, productdescription, learnmore,imageURL}) {
    return ( 
        <div className='container mt-2 mb-3'>
            <div className='row mt-5'>
                <div className='col-4 mt-5 pt-5'>
                    <h1 className='pt-5 mt-1 fs-4 pb-3'>{productname}</h1>
                    <p className='text-muted'>{productdescription}</p>
                    <a href={learnmore} style={{ textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right" ></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 '>
                    <img src={imageURL}/>
                </div>
            </div>

        </div>
     );
}

export default RightSection;