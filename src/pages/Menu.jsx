import React from 'react'
import Navbar from '../components/Navbar'
import MenuHero from '../components/MenuHero'
import MenuCategories from '../components/MenuCategories'
import Footer from '../components/Footer'

const Menu = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <MenuHero/>
            <MenuCategories/>
            <Footer/>
        </div>
    )
}

export default Menu