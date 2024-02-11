"use client"
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

function MovieModal( {movie}  ) {

    return (
    <>
        <Link href="/movies" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[100000]">
            <div className="bg-custom-gray rounded-md max-w-[920px] w-[100%] h-[90%] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-[550px]" >
                    <div className="absolute inset-0"></div>
                    <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}  alt='NetFlix' fill objectFit='contain' />
                </div>
                <h1>Film İsmi: {movie.original_title}</h1>
            </div>
        </Link>
    </>
    );
    
}


export default MovieModal