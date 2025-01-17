import React from 'react'
import "../Css/login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-main'>
        <div className="login-left">
            <h1>Log in.</h1>
            <div className="container">
                <input required="required" type="email" name="text" className="input" placeholder='Email Adress' />
                <label className="label">E-Mail*</label>
            </div>
            <div className="container">
                <input required="required" type="password" name="text" className="input" placeholder='Password' />
                <label className="label">Password *</label>
            </div>
            <a href="#">Password Help?</a>
            <button>Log in</button>
            <p>Don't have an account ?</p>
            <Link to={"/signup"} style={{textDecoration:"underline"}}>Create One Now</Link>
        </div>
        <div className="login-right">
            <h3>Looking for your order ?</h3>
            <p>See your order even if you are not a registered user. Enter the order number and your last name.</p>
            <Link to={"/order"}>Find Your Order</Link>
        </div>
    </div>
  )
}

export default Login