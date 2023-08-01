import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Header = () => {
  return (
    <div className='header__container'>
        <ul>
            <li><Link to='/'><span>Shopping Cart</span></Link></li>
           <div className='links'>
           <li><Link to='/'> Home</Link></li>
           <li><Link to='/cart'>Cart</Link></li>
           </div>
        </ul>
    </div>
  )
}

export default Header