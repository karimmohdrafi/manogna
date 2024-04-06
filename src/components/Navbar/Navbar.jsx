import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    var [menu, setMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='navbar'>
            <h1 className='pandu'>N V N D</h1>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile")} className={menu === 'mobile' ? 'active' : ''}>App</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === 'contact' ? 'active' : ''}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} style={{ height: '45px', width: '45px' }} /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
