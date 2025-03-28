import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MenuHero from '../components/MenuHero'
import MenuCategories from '../components/MenuCategories'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import MenuItemList from '../components/MenuItemList'

const Menu = () => {
    const [selectedcategory, setSelectedCategory] = useState({});
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <MenuHero />
            <MenuCategories selectedcategory={selectedcategory} setSelectedCategory={setSelectedCategory} />
            <MenuItemList selectedcategory={selectedcategory} />
            <Contact />
            <Footer />
        </div>
    )
}

export default Menu