import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
       <NavLink ClassName={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink> 
       <NavLink ClassName={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink> 
       <NavLink ClassName={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink> 
        </nav>
    </div>
  )
}

export default Navbar
