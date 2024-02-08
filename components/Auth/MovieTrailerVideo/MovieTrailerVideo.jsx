import React from 'react'

import Image from 'next/image'

function MovieTrailerVideo() {
  return (
    <>
       <div className="relative w-full">
          <video src="/images/loki_new.mp4" autoPlay playsInline muted loop className='w-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-[15%] sm:px-[5%] mt-[-200px]">
        {/* Film 1 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden object-contain">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>

        {/* Film 2 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>

        {/* Film 3 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>

        {/* Film 4 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>

        {/* Film 5 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>

        {/* Film 6 */}
        <div className="relative bg-gray-200 h-96 rounded-md overflow-hidden">
            {/* Film içeriği */}
            <Image src='/images/movie_banner.jpg' alt='eren' fill className='w-full object-cover' />
        </div>
    </div>

    </>
  )
}

export default MovieTrailerVideo