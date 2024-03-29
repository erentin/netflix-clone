import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

function MovieList(  { movies, title}  ) {

  return (
    <div>
        <h1 className='relative text-white text-2xl font-bold py-4'>
            {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {
            movies.map( movie => {
              return (
                  <Link key={movie.id} href={`/movies/${movie.id}`} className="relative bg-gray-200 h-96 rounded-md overflow-hidden object-contain">
                    <Image 
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                        alt='eren' 
                        fill 
                        loading='lazy'
                        className='w-full object-cover' />
                  </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default MovieList