import React from 'react'
import './ReturnRefundStyles.css'

function ReturnRefund() {
  return (
    <div className="return-refund-wrapper p-5">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-12">
            <h4 className='text-center text-uppercase return-heading my-5'>returns and refunds</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className='para text-justify'>Our refund and returns policy lasts 14 days. If 14 days have passed since your purchase, we can’t offer you a <br /> full refund or exchange.</p>
            <p  className='para text-justify'>To be eligible for a return, your item must be unused and in the same condition that you received it. It must <br /> also be in the original packaging.</p>
            <p  className='para text-start'>To initiate your return, we require a receipt or proof of purchase.</p>

            <div className="return-form mt-4">
             <div className="form">
             <h5 className='mt-4'>APPLY FOR A RETURN/EXCHANGE</h5>
              <label className='mt-2 mb-1' htmlFor="Email">Email Address <span><i class="bi bi-asterisk"></i></span></label>
              <br />
              <input type="emai" placeholder='Enter Your Email Address' className='w-100 p-2 '/>
              <br />
              <label className='mt-2 mb-1' htmlFor="Order Number">Order Number <span><i class="bi bi-asterisk"></i></span></label>
              <br />
              <input type="text" placeholder='Enter Your Order Number' className='w-100 p-2 '/>
              <br />
              <button className='refund-btn-search btn-secondary my-3 mx-0 p-2'>Search</button>
             </div>
            </div>

            <div className="situations">
             <div className="div">
             <h5 className='my-3'>There are certain situations where only partial refunds are granted:</h5>
              <ul>
                <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
                <li>Any item that is returned more than 14 days after delivery.</li>
              </ul>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnRefund