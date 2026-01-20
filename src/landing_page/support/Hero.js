import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid ' id="supportHero">
            <div className='p-5 mt-5 mb-2' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" style={{color:"white"}}>Track Ticket</a>
            </div>
            <div className='row p-5 mx-5' >
                <div className='col-6  '>
                    <h1 className='fs-3 mb-3'>Search for an answer or browse help topics to create ticket</h1>
                    <input placeholder="Eg. how do i activate F&O" style={{padding:"10px"}}/><br/>
                    <a href="" className='px-2'>Track account opening</a>
                    <a href="" className='px-2'>Track segment activation</a>
                    <a href="" className='px-2'>Intraday margins</a>
                    <a href="" className='px-2'>Kite user manual</a>
                </div>
                <div className='col-1 '></div>
                <div className='col-5 '>
                    <h1 className='fs-3 mb-3'>Featured</h1>
                    <ol>
                        <li><a href="" style={{lineHeight:"20pxpx"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" style={{lineHeight:"2px"}}>Latest Intraday leverages- MIS & CO</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
     );
}

export default Hero;