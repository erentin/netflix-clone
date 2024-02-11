import React from 'react'

import Image from 'next/image'

import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies  } from '@/utils/api'



import MovieList from '../MovieList/MovieList';

async function MovieTrailerVideo() {

    
  const popularMovies = await fetchPopularMovies();
  const topRatedMovies = await fetchTopRatedMovies();
  const upcomingMovies = await fetchUpcomingMovies();


  return (
    <>
        <div className="relative w-full">
        
          <video src="/images/loki_new.mp4" autoPlay playsInline muted loop className='w-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        </div>

        <div className='flex flex-col gap-10 mt-[-200px] px-[15%] sm:px-[5%]'>

            <MovieList movies={popularMovies} title="Popular on Netflix" />
            <MovieList movies={topRatedMovies} title="Top Rated on Netflix" />
            <MovieList movies={upcomingMovies} title="Upcoming on Netflix" />
            
        </div>

    </>
  )
}

export default MovieTrailerVideo