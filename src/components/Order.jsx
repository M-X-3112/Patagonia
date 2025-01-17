import React from 'react'
import "../Css/Order.css"
function Order() {
  return (
    <div className='order-main'>
        <h1>Find your order.</h1>
        <p className='order-p1'>See your order even if you are not a registered user. Enter the order number and your last name.</p>
        <div className="container">
            <input required="required" type="email" name="text" className="input" placeholder='12345678' />
            <label className="label">Order Number*</label>
            <p className='field-r'>This field is required</p>
        </div>
        <div className="container">
            <input required="required" type="email" name="text" className="input" placeholder='Billing ZIP code' />
            <label className="label">Billing ZIP code*</label>
            <p className='field-r'>This field is required</p>
        </div>
        <div className="container">
            <input required="required" type="email" name="text" className="input" placeholder='My Last Name' />
            <label className="label">Last Name*</label>
            <p className='field-r'>This field is required</p>
        </div>
        <button>Check Status</button>
        <p className='order-p2'>This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </div>
  )
}

export default Order