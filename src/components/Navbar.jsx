import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const[mobileView,setMobileView] =useState(false)

  const menuFunction =()=>{
    setMobileView(prev=>!prev)
  }

  let links = [
    { label: "HOME", link: "/home" },
    { label: "MENU", link: "/" },
    { label: "MAKE A RESERVATION", link: "/reservation" },
    { label: "  CONTACT US", link: "/contact" }
  ]

  return (
    <div className=' relative bg-[#121618] flex justify-between  py-4 md: md:pt-12 md:px-10 '>
      <div >
        <div >
          <NavLink to="/">
            <img className='absolute w-[50px] md:w-[86px] z-20 left-[45%] top-[30px]  md:top-[57%] md:left-10 ' src="/assets/logo.svg" alt="logo" />
          </NavLink>
        </div>
        <div className='font-oswald font-normal absolute z-10 left-36 top-12 text-[35px] leading-9 hidden md:block'>
          <h2 className='text-[#0796EF]'>DEEP <span className='text-white'>NET</span></h2>
          <h2 className='text-[#857878]'>SOFT</h2>
        </div>
      </div>

      <div  className='md:hidden px-5 '>
        <img onClick={menuFunction} className='cursor-pointer' src="/assets/hamburgerIcon.svg" alt="handburgerMenu" />
      </div>



   

      <div className='hidden md:flex text-white gap-5 font-oswald font-normal'>
       
       {links.map((data,i)=>(
         <NavLink
         key={i}
         to={data.link}
         className={({ isActive }) => isActive ? "text-[#0796EF] cursor-pointer" : "text-white cursor-pointer "}
       >
        {data.label}
       </NavLink>
       ))}
      </div>

     {mobileView &&
      <div className='md:hidden flex absolute top-9 bg-[#121618] items-center pt-14 pb-6 z-10 w-full flex-col text-white gap-5 font-oswald font-normal'>
       
      {links.map((data,i)=>(
        <NavLink
        key={i}
        to={data.link}
        className={({ isActive }) => isActive ? "text-[#0796EF] cursor-pointer" : "text-white cursor-pointer "}
      >
       {data.label}
      </NavLink>
      ))}
     </div>
     }
    </div>
  )
}

export default Navbar
