import React from 'react'

import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between py-6 px-[10%]' >

        <div className='relative h-[33px] w-[100px] md:h-[50px] md:w-[150px]'>
            <Image src='/images/logonetflix.png' alt="Netflix Logo" fill />
        </div>

        <div className='flex items-center gap-2 md:gap-10' >

            <div>
                <select name="" id="" className='bg-transparent h-8 border  border-gray-600 w-14 md:w-28 px-2 rounded-md text-white' >
                    
                    <option value="" className='text-black'>Türkçe</option>
                    <option value="" className='text-black'>İngilizce</option>
                    <option value="" className='text-black'>İtalyanca</option>
                </select>
            </div>

            <button className='bg-red-600 h-8 px-2  rounded-md font-semibold text-sm' >
                Oturum Aç
            </button>

        </div>

    </div>
  )
}

export default Header