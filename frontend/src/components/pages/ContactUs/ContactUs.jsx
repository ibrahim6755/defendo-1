import React from 'react'
import './ContactUsStyles.css'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (

        <><div className="contact-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 w-60">
                        <div className="contact-us-wrapper">
                          <h5 className='heading text-uppercase text-center my-5'>contact us</h5>
                            <h5 className='question text-uppercase fw-bold'>how can you contact us?</h5>
                            <Link className='text-decor' to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=XBcJlCGHkNnKxhpvKTrQVcTjBTkZJlnWCgDzDwKWKdgJcZxcdzWThLRRwrVflTnNDfJfBDLPbVFNvQXQ"><p>Email: ddefendo@gmail.com</p></Link>
                            <p className='answer'>We are confident that you'll find the answers you are looking for from our <Link to="/faq">FAQs page</Link>, however if you do need to speak to us please email contact@shoprusset.com. Please only send 1
                                email with your query. If we receive multiple emails from you, your query will go to the back of the queue and will therefore take a significant amount of time longer to get back to you.</p>
                            <h5 className='question text-uppercase fw-bold '>what information do we need to help you?</h5>
                            <p className='answer my-4'>Be sure to include as much information as you can e.g./ order number (#123456) email address, pictures, etc. This will allow us to answer any questions you have as quickly as possible. </p>
                            <div className="note">
                                <p>Please note that dispatch time from our warehouse is unaffected. If you experience unusual delay in delivery, it might be due to incomplete shipping details or stock discrepancies. Please get in touch with us in that case so we will try our best to offer a solution. </p>
                                <p>Warehouse: Flat no 9, Bewal Apartments, G-9 Markaz Islamabad.</p>
                                <p>WhatsApp: 0307-1555587</p>
                                <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=XBcJlCGHkNnKxhpvKTrQVcTjBTkZJlnWCgDzDwKWKdgJcZxcdzWThLRRwrVflTnNDfJfBDLPbVFNvQXQ"><p>Email: ddefendo@gmail.com</p></Link>
                                <input className='p-2 me-2 id' type="text" placeholder='Your name' />
                                <input className='p-2 ms-3 id email' type="email" placeholder='Your email' /> <br />
                                <textarea className='message my-2 custom' name="Your message" cols="85" rows="8">Your Message</textarea> <br />
                                <button className='p-2 send-btn'>Send message</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs