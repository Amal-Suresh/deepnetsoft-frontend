import React from 'react'
import Navbar from '../components/Navbar'
import MenuHero from '../components/MenuHero'
import MenuCategories from '../components/MenuCategories'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Menu = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <MenuHero/>
            <MenuCategories/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Menu