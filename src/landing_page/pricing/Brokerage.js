import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row'>
                <div className='col-8 p-4'>
                    <a href="" style={{textDecoration:"none"}} className='text-center'><h3 className='fs-4'>Brokerage Calculator</h3></a>
                    <ul className='text-muted' style={{textAlign:"left", fontSize:"14px"}}>
                        <li>Call & Ttade And RMS auto-squareoff:Additional charges of <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>50 + GST per order. </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>100 per executed order for equity(whichever is lower).</li>
                        <li>For NRI account (PIS),0.5% or <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>200 per executed order for equity(whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>40 per executed order instead of <i class="fa fa-indian-rupee-sign fs-6 mt-3 mb-3" ></i>20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:"none"}} className='text-center'><h3 className='fs-4'>List of charges</h3></a>
                </div>

            </div>
        </div>
     );
}

export default Brokerage;
