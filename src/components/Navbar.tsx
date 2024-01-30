import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <>
    <div className='navbar'>
      <div className='upper-small'>
      <div className='small-upper'> 
      {
        (nav===false) ? <RxHamburgerMenu className='account-icon' onClick={handleClick}/>
        : <IoCloseSharp className='account-icon' onClick={handleClick}/>
      } 
        <div className='logo'>
          <img src="https://innovist.com/cdn/shop/files/Final_Innovist_Logo-04_170x.png?v=1706178919" alt="" />
        </div>
        <div className='icons'>
          <IoPersonOutline className='account-icon'/>
          <RiShoppingCart2Line className='shop-icon'/>
        </div>
        </div>
        <div className='searchbar'>
          <input type="text"  className='searchbarinput'/>
          <IoSearch  className='search-logo'/>
        </div>
      </div>
      
      <div className='upper'>
        <div className='logo'>
          <img src="https://innovist.com/cdn/shop/files/Final_Innovist_Logo-04_170x.png?v=1706178919" alt="" />
        </div>
        <div className='brands'>
          <img src="https://innovist.com/cdn/shop/files/bare-logo_b27e2e10-7e5e-40d2-a5be-1fbbb44dd79a.png?v=1677248586" alt="" />
          <img src="https://innovist.com/cdn/shop/files/Artboard_1_1.png?v=1654863164" alt="" />
          <img src="https://innovist.com/cdn/shop/files/Artboard_1_2051f510-a6ca-4798-8036-c9e632a81cab.png?v=1654863229" alt="" />
        </div>
        <div className='searchbar'>
          <input type="text"  className='searchbarinput'/>
          <IoSearch  className='search-logo'/>
        </div>
        <div className='icons'>
          <IoPersonOutline className='account-icon'/>
          <RiShoppingCart2Line className='shop-icon'/>
        </div>
      </div>
      <div className='lower'>
        <ul className='nav-items'>
          <li className='nav-item'><h4>BESTSELLERS</h4></li>
          <li className='nav-item'><h4>BRANDS</h4></li>
          <li className='nav-item'><h4>CONCERNS</h4></li>
          <li className='nav-item'><h4>HAIR CARE</h4></li>
          <li className='nav-item'><h4>SKIN CARE</h4></li>
          <li className='nav-item'><h4>SUN CARE</h4></li>
          <li className='nav-item'><h4>BLOGS</h4></li>
          <li className='nav-item'><h4>KNOW US BETTER</h4></li>
          <li className='nav-item'><h4>INNOVIST INSIDER</h4></li>
        </ul>
      </div>
    </div>
      {
        nav && (
          <div className='sidebar'>
            <h2 className='hii'>Hi, Innovist Insider</h2>
            <h4>Welcome!</h4>

            <div className='shop-section'>
              <h1>SHOP</h1>
              <ul>
                <li className='shop-item'><h3>Best Sellers</h3></li>
                <li className='shop-item'><h3>New Launches</h3></li>
                <li className='shop-item'><h3>Hair Care</h3></li>
                <li className='shop-item'><h3>Skin Care</h3></li>
                <li className='shop-item'><h3>Sun Care</h3></li>
                <li className='shop-item'><h3>Offers</h3></li>
              </ul>
            </div>
            <div className='shop-section'>
              <h1>SHOP</h1>
              <ul>
                <li className='shop-item'><h3>Best Sellers</h3></li>
                <li className='shop-item'><h3>New Launches</h3></li>
                <li className='shop-item'><h3>Hair Care</h3></li>
                <li className='shop-item'><h3>Skin Care</h3></li>
                <li className='shop-item'><h3>Sun Care</h3></li>
                <li className='shop-item'><h3>Offers</h3></li>
              </ul>
            </div>
          </div>
        )
      }
      </>
  )
}

export default Navbar
