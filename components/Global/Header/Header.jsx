
import React from 'react'

import { auth } from '@clerk/nextjs';

import Link from 'next/link';
import Image from 'next/image'

import { IoLanguage } from "react-icons/io5";

function Header( {isLoginPage = false} ) {
  const  {userId}  = auth()

  return (
    <header className='fixed w-full bg-gradient-to-b from-black to-transparent z-[1000]'>

        <div className='flex justify-between py-6 px-[10%] gap-10' >
            <div className={`${userId ? 'relative h-[22px] w-[66px] md:h-[33px] md:w-[100px]' : 'relative h-[33px] w-[100px] md:h-[50px] md:w-[150px]'}`}>
                <Image src='/images/logonetflix.png' alt="Netflix Logo" fill />

            </div>
                <nav className="flex flex-row items-center gap-10 mr-auto">

                    <Link href="/" >Home</Link>
                    <Link href="/" >TV Shows</Link>
                    <Link href="/" >Movies</Link>
                    <Link href="/" >News & Popular</Link>
                    <Link href="/" >My List</Link>
                    <Link href="/" >Watch Again</Link>

                </nav>

                {
                    isLoginPage == false && (
                    <>
                        <div className='relative flex items-center gap-2 md:gap-10'  >

                            
                                {!userId &&
                                    <>
                                        <div className='flex justify-center items-center bg-transparent h-8 border  border-gray-600 w-12 md:w-36 px-2 rounded-md text-white '>
                                            <select name="select" id="" className=' bg-transparent  focus:border-none border-none outline-none w-12 md:w-36 px-4 md:block' >
                                                
                                                <option value="" className='text-black'>Türkçe</option>
                                                <option value="" className='text-black'>İngilizce</option>
                                                <option value="" className='text-black'>İtalyanca</option>
                                            </select>
                                        </div>
                                        
                                        <label className='absolute left-2' htmlFor='select' >
                                            <IoLanguage />
                                        </label>

                                        <Link href='/login' className='flex justify-center items-center bg-custom-red h-8 px-2 rounded-md font-semibold text-sm' >
                                            Oturum Aç
                                        </Link>
                                    </>
                                }

                        </div>
                    </>
                    )
                }

        </div>
    </header>
  )
}

export default Header