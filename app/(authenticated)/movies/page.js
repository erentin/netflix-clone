import React from 'react'

import MovieList from '@/components/Auth/MovieList/MovieList'

import { fetchMovieSearch } from '@/utils/api';


async function Movies({searchParams}) {

  const searchValue = searchParams.search;
  const searchedMovies = await fetchMovieSearch(searchValue);
  console.log(searchedMovies)
  
  return (
    <>
    {
      searchValue && 
      <div className='absolute bg-custom-gray h-[100%] w-full z-[1000] py-[15%] lg:py-[5%]'>
            <div className='flex flex-col gap-10 px-[15%] sm:px-[5%] lg:pb-20'>

              <MovieList movies={searchedMovies} title="Popular on Netflix" />

            </div>
      </div>
    }
    </>
  )
}

export default Movies