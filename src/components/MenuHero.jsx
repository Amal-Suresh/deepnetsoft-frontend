const MenuHero = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <img className='bg-cover md:hidden block w-full' src="/assets/menu-mobile.svg" alt="" />
            <img className='bg-cover hidden md:block' src="/assets/hero-bg.png" alt="" />
            <h1 className='absolute top-[20%] left-[40%] text-shadow-red text-white text-[40px] md:text-[75px] font-semibold'>MENU</h1>
            <p className='absolute text-center top-[45%] p-5 md:top-[60%]  max-w-4xl text-[#BBBBBB] font-kelly text:[16px] md:text-[18px]'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        </div>
    )
}

export default MenuHero