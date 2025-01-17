import React from 'react'
import "../Css/login.css"
import "../Css/signup.css"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='login-main'>
        <div className="login-left">
            <h1>Create an Account.</h1>
            <div className="inputs-create">
                <input type="text" placeholder='First Name*' />
                <input type="text" placeholder='Last Name*' />
                <input type="email" placeholder='Email*' />
                <input type="email" placeholder='Confirm Email*' />
                <input type="password" placeholder='Password*' />
                <input type="password" placeholder='Confirm Password*' />
            </div>
            <div className="checkboxx">
                <input type="checkbox" />
                <p>Receive emails about new products, sales and store events.</p>
            </div>
            <button>Create Account</button>
        </div>
        <div className="login-right">
            <h3>Looking for your order ?</h3>
            <p>See your order even if you are not a registered user. Enter the order number and your last name.</p>
            <Link to={"/order"}>Find Your Order</Link>
        </div>
    </div>
  )
}

export default SignUp