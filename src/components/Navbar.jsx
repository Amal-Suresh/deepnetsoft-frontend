import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#121618] flex justify-between'>

      <div>
        <img src="" alt="" />
        {/* logo */}
      </div>
      <div className='flex text-white gap-5 '>
        {/* links */}
     <Link to="/">HOME</Link>
     <Link to="/">MENU</Link>
     <Link to="/">MAKE A RESERVATION</Link>
     <Link to="/">CONTACT US</Link>

     

      </div>

    </div>
  )
}

export default Navbar