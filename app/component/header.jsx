'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`flex justify-between items-center fixed top-0 right-0 left-0 py-[25px] px-[28px] sm:px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] 2xl:px-[370px] transition-all duration-300 ${isScrolled ? 'bg-[#053C4B]' : 'bg-transparent'}`}>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={199}
                height={50}
                className='h-[40px] w-[160px] sm:h-[50px] sm:w-[199px]'
            />

            <div className=" md:space-x-10 justify-center items-center hidden md:hidden lg:flex  text-lg font-semibold text-white text-[17px] ">
                <Link href="/home" >
                    Advisors
                </Link>
                <Link href="/about" >
                    Insights
                </Link>
                <Link href="/services">
                    About
                </Link>
                <Link href="/services" >
                    Login
                </Link>
                <Link href="/services" className='flex h-[14px] w-[14px]' >
                    <Image src={'/images/search.png'}
                        alt='search'
                        height={14}
                        width={14} />
                </Link>

                <button className='h-[40px] w-[114px] border-2 border-white'>
                    Join now
                </button>


            </div>
            <div className='flex lg:hidden'>
                <button onClick={() => { setOpenDrawer(true) }}>
                    <Image src={'/images/menu.png'}
                        alt='search'
                        height={20}
                        width={20} />
                </button>

                <Link href="/services" className='ml-[20px]'  >
                    <Image src={'/images/search.png'}
                        alt='search'
                        height={20}
                        width={20} />

                </Link>
            </div>
            <div className={`fixed top-0 right-0 w-full h-full bg-gray-800 text-white transform ${openDrawer ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-500 ease-in-out`}>
                <div className="flex justify-end mt-10 mr-[28px] ">
                    <button onClick={() => { setOpenDrawer(false) }} className="" >
                        <Image
                            src={'/images/close.png'}
                            alt="close"
                            height={20}
                            width={20}
                            className=''
                        />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Header