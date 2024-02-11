import React from 'react'

import Image from 'next/image'

function IntroductionTv() {

  return (
    <div className='flex justify-center items-center lg:items-center bg-black transparent h-[600px] lg:h-[600px] w-full text-white' > 
        <div className='flex flex-col gap-20 justify-center  lg:flex-row h-[100%] lg:h-[100%] px-10 py-20 lg:p-20'>

          <div className='flex gap-4 lg:flex flex-col lg:flex-1 justify-center text-center lg:text-left'>

            <h1 className='font-black text-3xl md:text-4xl lg:text-5xl' >Televizyonunuzda izleyin</h1>
            <p className='font-medium text-lg lg:text-xl' >Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</p>

          </div>

          <div className='relative flex-auto lg:flex-1'>
            <Image src="/images/tv.png" alt="Netflix Television" fill className='z-[10] object-contain' />
            {/* <video src="/images/video-tv.mp4"  autoPlay playsinline muted loop className=' inset-0 z-[1] object-cover' /> */}
          </div>
          
        </div>
    </div>
  )
}

export default IntroductionTv