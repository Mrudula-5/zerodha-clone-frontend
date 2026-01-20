import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo,  learnMore, googlePlay, appStore} ) {
    return ( 
        <div className='containermb-3'>
            <div className='row'>
                <div className='col m-5'>
                    <img src={imageURL} style={{width:"95%"}}/>

                </div>
                <div className='col m-5'>
                    <h1 className='  fs-4 pb-3'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right" ></i></a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right" ></i></a>
                    </div>
                    <div  className='pt-3'>
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                        <a href={appStore} style={{marginLeft:"25px"}}><img src="media/appstore-badge.svg"/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;