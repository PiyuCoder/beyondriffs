import React, { useState } from 'react';
import '../components/Contact.css';

const ContactUs = () => {

  
  return (
    <div className='contactussec'>
      
      <div className="contactdetailssec ms-5 mt-2">
        <div className="details mb-5">
        <h2 className='text-center mt-4 text-light  text-4xl text-center font-bold underline' >Details</h2>
          <form action="">
        
            <div className="form_inputs">
              <div className="name">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="number">
                <input type="number" placeholder="Enter your number " />
              </div>
              <div className="email">
                <input type="email" placeholder="Enter your email"  />
              </div>
              <button className="btn btn-warning  mt-2">Send Message</button>
            </div>
          </form>
        </div>

        <div className="detailssec ms-5 p-5 text-light">
          <h1 className='me-5 mb-5 text-4xl text-center mt-5 font-bold underline'>Contact Us</h1>
          <p className='me-5'>Call us or Visit us for more queries</p>

          <p>
            <svg className="two me-2 mt-4" xmlns="http://www.w3.org/2000/svg" width="30" height="38" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg> Ghaziabad, Uttar Pradesh
          </p>

          <p>
            <svg className="two me-2" xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
            </svg>
            +91-8867474079
          </p>
          <p>+91-9035309350</p>
        </div>
      </div>




    </div>
  );
}

export default ContactUs;
