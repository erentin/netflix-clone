import React from 'react'

import Image from 'next/image'

import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies  } from '@/utils/api'

import MovieList from '../MovieList/MovieList';

async function MovieTrailerVideo() {
  const popularMovies = await fetchPopularMovies();
  const topRatedMovies = await fetchTopRatedMovies();
  const upcomingMovies = await fetchUpcomingMovies();

  return (
    <div className='bg-black'>

        <div className="relative w-full">
        
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div> 
          <div className='absolute bottom-[40%] left-[15%] sm:left-[5%]'>
            <div className='relative w-[30%] h-[200px] lg:w-[30%] lg:h-[200px] mb-10'>
              <Image src="/images/loki_logo.png" alt="Loki" fill objectFit='contain' />
            </div>
            {/* <h1 className='text-[120px] font-bold z-[100000]'>LOKI</h1> */}
            <h2 className='hidden xl:flex text-[25px] font-semibold mb-[20px]'>AVAILABLE NOW!</h2>
            <p className='hidden w-[50%] text-sm 2xl:w-[30%] lg:block'>Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise. </p>
          </div>
          <video src="/images/loki_new.mp4" autoPlay playsInline muted loop className='w-full object-cover' />

        </div>

        <div className='flex flex-col gap-10 lg:mt-[-300px] px-[15%] sm:px-[5%] lg:pb-20'>

            <MovieList movies={popularMovies} title="Popular on Netflix" />
            <MovieList movies={topRatedMovies} title="Top Rated on Netflix" />
            <MovieList movies={upcomingMovies} title="Upcoming on Netflix" />
            
        </div>

    </div>
  )
}

export default MovieTrailerVideo