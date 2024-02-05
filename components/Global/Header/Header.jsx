import React from 'react'

import Link from 'next/link';
import Image from 'next/image'

import { IoLanguage } from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between py-6 px-[10%]' >

        <div className='relative h-[33px] w-[100px] md:h-[50px] md:w-[150px]'>
            <Image src='/images/logonetflix.png' alt="Netflix Logo" fill />
        </div>

        <div className='relative flex items-center gap-2 md:gap-10'  >

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

        </div>

    </div>
  )
}

export default Header