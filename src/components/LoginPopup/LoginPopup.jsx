import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("LogIn")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="LogIn"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Enter Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"LogIn"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>I agree to the terms & conditions</p>
        </div>
        {currState==="LogIn"
        ?<p>Create New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("LogIn")}>LogIn Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
