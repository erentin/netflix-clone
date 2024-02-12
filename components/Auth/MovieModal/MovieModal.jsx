"use client"
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaImdb } from "react-icons/fa";

function MovieModal( {movie}  ) {

    movie.genres.map( genre => {
        console.log(genre.name)
    })

    return (
    <>
        <Link href="/movies" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[100000]">
            <div className="bg-custom-gray rounded-md max-w-[920px] w-[100%] h-[90%] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-[510px]" >
                    <div className='absolute bottom-[20%] left-[5%] z-[1000]'>
                        <h1 className=' text-7xl font-bold'>{movie.original_title}</h1>
                        <div className=''>
                            <Link href='/movies' className='flex justify-center items-center bg-custom-red rounded-md font-semibold text-sm max-w-[120px] h-[40px] mt-5' >
                            <FaPlay /> &nbsp; <span> Play</span>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-stone-900 to-transparent z-[100]"></div> 
                    <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}  alt='NetFlix' fill objectFit='contain' />
                </div>

                <div className='grid grid-cols-3 py-6 px-4'>
                    
                    <div className=' col-span-2'>
                        <div className='flex flex-row gap-2 font-semibold text-md mb-10'>
                            <p className='text-green-400'>95% Match</p>
                            <p>{movie.release_date.slice(0, 4)}</p>
                            <p className='flex gap-1'> <span className='text-2xl'> <FaImdb color="yellow" /></span> {movie.vote_average.toFixed(1)} </p>
                        </div>
                        <p>{movie.overview}</p>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-sm'><span className='text-gray-400 font-semibold'>Genres: </span> 
                            { 
                                movie.genres.map( genre => {
                                    return genre.name + ', ';
                                })
                            } 
                        </p>
                    </div>
                </div>
              
            </div>
        </Link>
    </>
    );
    
}


export default MovieModal