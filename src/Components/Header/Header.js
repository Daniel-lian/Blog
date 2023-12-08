import React from 'react'
import './Header.css'
import logo from '../../Assets/images/logo.png'
import { nav } from '../../Assets/data/data.js'
import { User } from './User.js'

import { Link } from 'react-router-dom'

export const Header = () => {

  window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  })

  return (
    <>
      <header className='header'>
        <div className='sContainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width={"80px"}/>
          </div>
        

          <nav>
            <ul>
              {
                nav.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>

          <div className='account flexCenter'>
            <User />
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
