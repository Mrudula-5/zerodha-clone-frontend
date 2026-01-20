import React from 'react';

function Team() {
    return (
    <div className="container ">
      <div className="row p-5 mb-5 ">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row ">
        <div className="col text-center">
          <img src="media/nithinKamath.jpg" alt="Founder Img" style={{borderRadius:"50%", width:"55%"}}/>
          <h5>Nithin Kamath</h5>
          <h6 className='text-muted pt-3 fs-8'>Founder, CEO</h6>
        </div>
        <div className="col p-5">
            <p className='fs-7'>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className='fs-7'>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
            <p className='fs-7'>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on  <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /  <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;