import React from 'react'
import './ComingSoonStyles.css'
import {Link} from 'react-router-dom'
function ComingSoon() {
  let isLoggedIn
    return (

        <div className='comingsoon-wrapper'>
         <div className="div">
         <h2 className='text-center my-3 p-3 text-dark text-uppercase'>Coming <br /> Soon!</h2>
          <p className='text-center fw-bold'>This product is coming soon. Stay tuned for updates.</p>
          {isLoggedIn ? (
            <p className='text-center fw-bold'>You will be notified when the product is available.</p>
          ) : (
            <p className='text-center fw-bold'>Please <Link className='text-dark fw-bolder text-decor' to="/account/login">Login</Link> to receive notifications when the product is available.</p>
          )}
         </div>
         <div className="btn"></div>
        </div>
      );
    };

export default ComingSoon