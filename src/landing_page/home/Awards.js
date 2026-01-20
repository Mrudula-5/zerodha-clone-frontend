import React from 'react';

function Awards() {
    return ( 
        <div className='container pb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/largestBroker.svg" alt="Award Img"></img>
                </div>
                <div className='col-6'>
                    <h1 className='mt-2'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volumes in India daily by trading & investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Futures & Options</li>
                                <li className='mb-2'>Commodity Derivatives</li>
                                <li className='mb-2'>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Stocks & IPOs</li>
                                <li className='mb-2'>Direct mutual funds</li>
                                <li className='mb-2'>Bonds & Govt. security</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/press-logos2.png" alt="press-logosImg" style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;