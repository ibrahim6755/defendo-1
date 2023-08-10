import React from 'react'
import './CheckoutSuccessStyles.css'
import success from '../../../src/imgs/success.png'
import {Link} from 'react-router-dom'

function CheckoutSuccess() {
  return (
    <div className="checkout-success-wrapper m-3 p-5">
      <div className="card p-5">
        <div className="img-div">
        <img className='img' src={success} class="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h2 className="card-title mt-4">Success</h2>
          <p className="card-text">Your Order has been Placed! <br /> We will be in touch shortly</p>
          <Link to='/'><button className='bg-dark btn text-white p-2'>Continue Shopping!</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess;