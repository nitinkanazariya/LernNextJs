'use client'

import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen flex  flex-col  '>
            <div className=' bg-[url("/images/homephonebg.png")] lg:bg-[url("/images/homebg.png")] w-full min-h-screen bg-right bg-cover px-[28px] sm:px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] 2xl:px-[370px]'>

                <p className='mt-[122px] sm:mt-[166px] lg:mt-[199px] w-[320px] sm:w-[540px] text-white text-[32px] xl:text-[40px] 2xl:text-[50px] font-bold'>Our Mission is to help you grow smarter and more confidently</p>
                <Image
                    alt='homefixedimg'
                    width={1000}
                    height={1000}
                    src={'/images/homefixedimg.png'}
                    className='hidden xl:flex xl:h-[500px] xl:w-[250px] absolute right-0 bottom-[-80px]' />
            </div>
            {/* <div className='px-[28px] sm:px-[0px] mt-[-40px] sm:mt-[80px] flex flex-col sm:flex-row sm:items-center'>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='flex' />
                <div className=' flex sm:ml-[120px] flex-col mt-[30px] sm:mt-[50px]'>
                    <p className='text-[18px] font-normal w-[320px] sm:w-[510px] leading-[23px] mb-[20px] font-sans'>ADVISORS</p>
                    <p className='text-[28px] sm:text-[55px] font-bold w-[320px] sm:w-[510px] sm:leading-[66px] leading-[35px]'>You’re invited to grow with us</p>
                    <p className='sm:text-[25px] text-[20px] font-normal w-[320px] sm:w-[510px] leading-[27px] sm:leading-[40px] mt-[20px] font-sans'>Whether you’re still considering independence or ready to move ahead on your own, our team is ready to help every step of the way - now and in the future.</p>
                    <button className='bg-[#014D38] sm:w-[148px] h-[50px] mt-[30px] text-white font-semibold text-[17px] font-sans'>
                        Advisors
                    </button>
                </div>
            </div>

            <div className='px-[28px] sm:px-[0px] mt-[50px] sm:mt-[120px] flex flex-col sm:flex-row sm:items-center'>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='flex sm:hidden' />
                <div className=' flex sm:ml-[120px] flex-col mt-[30px] sm:mt-[50px]'>
                    <p className='text-[18px] font-normal w-[320px] sm:w-[510px] leading-[23px] mb-[20px] font-sans'>INVESTORS</p>
                    <p className='text-[32px] sm:text-[60px] font-bold w-[320px] sm:w-[510px] sm:leading-[66px] leading-[35px]'>Understanding
                    your investments</p>
                    <p className='sm:text-[28px] text-[20px] font-normal w-[320px] sm:w-[510px] leading-[27px] sm:leading-[40px] mt-[20px] font-sans'>Searching for an independent advisor who understands your unique situation, needs, and philosophy? We’re happy to connect you.</p>
                    <button className='bg-[#014D38] sm:w-[148px] h-[50px] mt-[30px] text-white font-semibold text-[17px] font-sans'>
                    INVESTORS
                    </button>
                </div>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='hidden sm:flex ' />
            </div> */}
            <div className=' flex md:flex-row flex-col md:items-center  px-[28px] md:px-0 md:mt-[80px] mt-[-80px]  '>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='flex' />
                <div className=' flex md:ml-[120px] flex-col mt-[30px] md:mt-[50px]'>
                    <p className='text-[18px] font-normal w-[320px] md:w-[510px] leading-[23px] mb-[20px] font-sans'>INVESTORS</p>
                    <p className='text-[32px] md:text-[60px] font-bold w-[320px] md:w-[510px] md:leading-[66px] leading-[35px]'>Understanding
                        your investments</p>
                    <p className='md:text-[28px] text-[20px] font-normal w-[320px] md:w-[510px] leading-[27px] md:leading-[40px] mt-[20px] font-sans'>Searching for an independent advisor who understands your unique situation, needs, and philosophy? We’re happy to connect you.</p>
                    <button className='bg-[#014D38] md:w-[148px] h-[50px] mt-[30px] text-white font-semibold text-[17px] font-sans'>
                        INVESTORS
                    </button>
                </div>

            </div>

            <div className=' flex  md:flex-row flex-col md:items-center  px-[28px] md:px-0 md:mt-[80px] mt-[50px]  '>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='flex md:hidden' />
                <div className=' flex  flex-col mt-[30px] md:mt-[50px] '>
                    <p className='text-[18px] font-normal w-[320px] md:w-[510px] leading-[23px] mb-[20px] font-sans'>INVESTORS</p>
                    <p className='text-[32px] md:text-[60px] font-bold w-[320px] md:w-[510px] md:leading-[66px] leading-[35px]'>Understanding
                        your investments</p>
                    <p className='md:text-[28px] text-[20px] font-normal w-[320px] md:w-[510px] leading-[27px] md:leading-[40px] mt-[20px] font-sans'>Searching for an independent advisor who understands your unique situation, needs, and philosophy? We’re happy to connect you.</p>
                    <button className='bg-[#014D38] md:w-[148px] h-[50px] mt-[30px] text-white font-semibold text-[17px] font-sans'>
                        INVESTORS
                    </button>
                </div>
                <Image src={'/images/adviseorimg.png'}
                    alt='search'
                    height={480}
                    width={900}
                    className='hidden md:flex md:ml-[120px]' />
            </div>



            <div className='bg-[url("/images/phoneecobg.png")] md:bg-[url("/images/homeecobg.png")] md:w-full bg-no-repeat md:bg-contain md:bg-left md:h-[710px] h-[805px] md:flex md:mt-[138px] mt-[70px]'>

                <div className='md:w-1/2 flex md:h-[710px]  justify-center items-center mt-[-30px] '>
                    <Image
                        alt='homeecotree'
                        src={'/images/homeecotree.png'}
                        height={800}
                        width={800}
                        className='h-[320px] w-[320px] sm:h-[400px]  sm:w-[400px] lg:h-[600px]  lg:w-[600px]   2xl:h-[800px]  2xl:w-[800px]  ' // Keeps the image within the container
                    />
                </div>
                <div className='h-[710px] md:w-1/2 md:flex md:justify-start md:pl-[80px] px-[28px] md:items-center flex-col md:mt-[120px]'>
                    <p className="text-white text-lg font-bold lg:text-[60px] text-[33px] lg:leading-[66px] leading-[40px] capitalize mt-[40px] md:mt-[0] ">An evolving
                        eco-system that grows with you</p>
                    <p className="text-white text-lg font-normal lg:text-[24px] text-[18px] lg:leading-[35px] leading-[25px] font-sans mt-[20px] md:mt-[20] ">
                        As the world of wealth management grows more complex, the more you need a firm who can grow with you. At Private Advisor Group, we are continually evolving to help you stay one step ahead in an ever-changing world.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default page