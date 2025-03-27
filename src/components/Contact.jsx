import React from 'react'

const Contact = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1 bg-black pt-14 pb-9  font-oswald text-[14px] md:text-[16px] px-4">

            <div className="md:order-1 order-2  p-4 border rounded-xl flex items-center flex-col justify-center gap-2 ">
                <p className='text-[#0796EF] font-normal'>CONNECT WITH US</p>
                <p className='text-[#857878] flex items-center gap-3'><span><img src="/assets/telephone-icon.svg" alt="" /></span> +91 9567843340</p>
                <p className='text-[#857878] flex items-center gap-3'><span><img src="/assets/mailbox-icon.svg" alt="" /></span> info@deepnetsoft.com</p>
            </div>

            <div className="md:order-2 order-1  p-4 border rounded-md flex items-center flex-col relative">
                <img className='absolute w-[74px] md:w-[86px] z-20  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src="/assets/logoblack.svg" alt="logo" />

                <div className='font-normal text-[35px] mt-4 md:mt-8 mb-1'>
                    <h2 className='text-[#0796EF]'>DEEP <span className='text-white'>NET</span>  <span className='text-[#857878]'>SOFT</span></h2>
                </div>
                <div className='flex gap-2'>
                    <img src="/assets/facebook-icon.svg" alt="" />
                    <img src="/assets/twitter-icon.svg" alt="" />
                    <img src="/assets/youtube-icon.svg" alt="" />
                    <img src="/assets/instagram.svg" alt="" />
                </div>
            </div>


            <div className="md:order-3 order-3  p-4 border rounded-xl flex items-center flex-col justify-center gap-2">
                <p className='text-[#0796EF] font-normal'>FIND US</p>
                <p className='text-[#857878] flex items-center gap-3 max-w-40'><span><img src="/assets/location-icon.svg" alt="" /></span> First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
            </div>

        </div>

    )
}

export default Contact