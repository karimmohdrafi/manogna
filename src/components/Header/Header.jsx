import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header' >
              <img className='kothi' src={assets.longfood9}  />
        <div className='header-contents'>
            <h2>Life is infinitely delicious</h2>
            <p>You never get a second chance to make a first impression. Now more than ever, it happens on your restaurant's website</p>
            <a href="#explore-menu"><button> View Menu</button></a>
        </div>
    </div>
  )
}

export default Header
