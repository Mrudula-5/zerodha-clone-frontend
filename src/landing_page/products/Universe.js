import React from 'react';

function Univere() {
    return ( 
        <div className='container text-center'>
            <h1 className='mb-5 fs-4'>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration:"none"}}> Zerodha.tech </a>blog.</h1>
            <h2 className='mb-3 mt-5 fs-3'>The Zerodha Universe</h2>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row mb-4 mt-5'>
                <div className='col-4 mt-4'>
                    <img src="media/zerodhaFundhouse.png" style={{width:"50%"}} className='pb-3 '/>
                    <p className='text-small text-muted pb-3 fs-6'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 mt-4'>
                    <img src="media/sensibullLogo.svg" style={{width:"70%"}}className='pb-3 '/>
                    <p className='text-small text-muted'>Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 mt-4'>
                    <img src="media/goldenpiLogo.png"style={{width:"60%"}} className='pb-3 '/>
                    <p className='text-small text-muted'>Investment research platformthat offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    <img src="media/streakLogo.png" style={{width:"40%"}} className='pb-3 '/>
                    <p className='text-small text-muted'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4'>
                    <img src="media/smallcaseLogo.png" className='pb-3 '/>
                    <p className='text-small text-muted'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4'>
                    <img src="media/dittoLogo.png" style={{width:"30%"}} className='pb-3 '/>
                    <p className='text-small text-muted'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free</p>
                </div>
            </div>
            <button className=' btn btn-primary fs-5 mb-5 mt-5' style={{width: "20%",margin:"0 auto"}}>Sign up for free</button>
        </div>
     );
}

export default Univere;