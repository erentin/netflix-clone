import Home from '@/app/(authenticated)/movies/page'
import MovieTrailerVideo from '@/components/Auth/MovieTrailerVideo/MovieTrailerVideo'
import Header from '@/components/Global/Header/Header'
import React from 'react'

function HomeAuth( {children }) {
  return (

    <div className='relative'>
        {children}
        <Header />
        <MovieTrailerVideo />
    </div>

  )
  
}

export default HomeAuth