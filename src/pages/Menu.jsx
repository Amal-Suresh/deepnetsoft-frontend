import React from 'react'
import Navbar from '../components/Navbar'
import MenuHero from '../components/MenuHero'

const Menu = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <MenuHero/>
        </div>
    )
}

export default Menu