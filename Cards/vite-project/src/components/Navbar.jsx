import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
