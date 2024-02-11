import MovieModal from '@/components/Auth/MovieModal/MovieModal'
import React from 'react'

import { fetchMovieDetail } from '@/utils/api';

async function Movie( { params } ) {
  
    console.log("params movie", params.movie )

    const movieDetail = await fetchMovieDetail(params.movie);

    return (
    <div>
      <MovieModal movie={movieDetail} />
    </div>
  )
}

export default Movie