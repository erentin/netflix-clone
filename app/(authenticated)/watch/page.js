import React from 'react'

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TiMediaRewind } from "react-icons/ti";
import { TiMediaFastForward } from "react-icons/ti";
import { AiFillSound } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { LuLayoutList } from "react-icons/lu";
import { MdSubtitles } from "react-icons/md";
import { MdSubtitlesOff } from "react-icons/md";
import { RiFullscreenExitFill } from "react-icons/ri";

function Watch() {
  return (
    <section className='relative bg-custom-gray h-screen w-screen'>

    <div class="absolute flex top-0 left-0 w-[100%] h-[100%] justify-center items-center">
        <video src="/images/paramount-pictures.mp4" autoPlay playsInline muted loop width="100%" height="100%" />
    </div>

        <div className='absolute flex flex-col bg-transparent items-center justify-around h-20 w-full bottom-0 px-[2%]'>
          <div className='flex justify-center w-full h-2'>
            <div className='bg-gray-600 w-[100%] rounded-md'>
    
            </div>
            <div></div>
          </div>

          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-row gap-5 justify-between items-center'>
              <FaPlay size={20} />
              <FaPause size={20} />
              <TiMediaRewind size={25} />
              <TiMediaFastForward size={25} />
              <AiFillSound size={20} />
            </div>
            <div>
              <strong>Billy on the Street </strong>
              <span>S2:E2 Scream for an American Girl</span>
            </div>
            <div className='flex flex-row gap-5'>
              <FaRegCircleQuestion size={20} />
              <LuLayoutList size={20} />
              <MdSubtitles size={20} />
              <MdSubtitlesOff size={20} />
              <RiFullscreenExitFill size={20} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Watch