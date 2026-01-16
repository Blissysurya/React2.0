import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <div className='flex justify-between items-center p-4 shadow-md'>
     <div className='flex gap-4'>
         <Link to="/services">Services</Link>
         <Link to="/work">Work</Link>
         <Link to="/about">About</Link>
     </div>

     <div >
            <h2>Astratto</h2>
     </div> 

     <div className='flex gap-4'> 
        <Link to="/careers">Careers</Link>
        <button>Contact Us</button>
     </div>
   </div>
  )
}

export default Navbar