import Home from '@/app/(authenticated)/home/page'
import MovieTrailerVideo from '@/components/Auth/MovieTrailerVideo/MovieTrailerVideo'
import Header from '@/components/Global/Header/Header'
import React from 'react'


function HomeAuth() {
  return (
    <div>
        <Header />
        <MovieTrailerVideo />
    </div>
  )
}

export default HomeAuth