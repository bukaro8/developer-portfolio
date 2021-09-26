import React, {Fragment}from 'react';
import {Link} from 'react-router-dom'
import header from './css/header.css'
import logo from '../images/logo.png'


const Header=()=>{

  return(
    <Fragment>
      {/*Logo section*/}
      <header className='header sticky'>
        
        <a href='#hero'><img className='logo' src={logo} alt="logo VH" /></a>
        
      {/* ========================================== */}
      {/* menu section */}
      <article className="menuContainer">
        <nav id='navbar'>
          <ul className='menu-list '>
            <li className="menu-item nav-item">
              <a href='#hero' className='menu-item-link nav-link' >Home</a>
            </li>
            <li className="menu-item">
              <a href='#about-anchor' className='menu-item-link nav-link' >About</a>
            </li>
            <li className="menu-item">
              <a href='#projects-anchor' className='menu-item-link nav-link' >Projects</a>
            </li>
            <li className="menu-item">
              <a className='menu-item-link nav-link' href='#contact-anchor'>Contact</a>
            </li>
          </ul>
        </nav>
        
      </article>
      

      </header>
      
    </Fragment>
)
}

export default Header