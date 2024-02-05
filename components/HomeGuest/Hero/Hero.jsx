import React from 'react'

import Image from 'next/image'

function Hero() {
  return (

    <div className='flex flex-col gap-5 justify-center items-center text-center transparent h-[500px] lg:h-[600px] px-[10%] md:px-[20%]' >
      <h1 className='font-black text-3xl md:text-5xl' >
      Sınırsız film, dizi ve çok daha fazlası
      </h1>
      <p className='font-medium text-xl md:text-2xl' >
      İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
      </p>
      <p className='text-lg md:text-xl' >
      İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
      </p>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <input type="email" placeholder='E-posta adresi' className='h-14 w-[300px] md:w-[400px] rounded-md bg-black bg-opacity-50 px-4 border border-gray-600'  />
        <button className='bg-custom-red px-4 rounded-md text-lg md:text-2xl font-medium h-12 md:h-14 w-[150px] whitespace-nowrap ' > Başlayın <span className='font-light'>&gt;</span> </button>
      </div>
    </div>
    
  )
}

export default Hero