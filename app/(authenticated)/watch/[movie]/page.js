'use client'
import React, { useRef, useState, useEffect } from 'react'

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TiMediaRewind } from "react-icons/ti";
import { TiMediaFastForward } from "react-icons/ti";
import { AiFillSound } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { LuLayoutList } from "react-icons/lu";
import { MdSubtitles } from "react-icons/md";
import { MdSubtitlesOff } from "react-icons/md";
import { RiFullscreenFill } from "react-icons/ri";
import { RiFullscreenExitFill } from "react-icons/ri";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";

function Watch() {
  const handle = useFullScreenHandle();
  const videoRef = useRef(null);
  const [showDiv, setShowDiv] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(false);
  const [subtitles, setSubtitles] = useState(false);
  const [currentTimeControl, setCurrentTimeControl] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  useEffect(() => {
    if (videoRef.current) {
      const currentVideoRef = videoRef.current;
      currentVideoRef.addEventListener('timeupdate', updateCurrentTime);
      return () => {
        currentVideoRef.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, []);

  useEffect( () => {
    let timeoutId;

    const handleMouseInactive = () => {
      timeoutId = setTimeout(() => {
        setShowDiv(false);
      }, 1000 )
    }

    const handleMouseActive = () => {
      clearTimeout(timeoutId);
      setShowDiv(true);
      handleMouseInactive();
    };

    handleMouseInactive();

    window.addEventListener('mousemove', handleMouseActive);

    return () => {
      window.removeEventListener('mousemove', handleMouseActive);
      clearTimeout(timeoutId);
    };


  }, [])
  
  useEffect(() => {
    if (currentTimeControl !== 0 && videoRef.current) {
      const newTime = currentTimeControl === 2 ? currentTime + 10 : currentTime - 10;
      setCurrentTime(newTime);
      videoRef.current.currentTime = newTime;
      setCurrentTimeControl(0);
      console.log(currentTime)
    }
  }, [currentTimeControl, currentTime]);

  const updateCurrentTime = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration)
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  const toggleVolume = () => {
    setVolume(!volume);
    if (videoRef.current) {
      videoRef.current.volume = volume ? 1 : 0;
    }
  };

  const toggleSubstitle = () => {
    setSubtitles(!subtitles);
  }

  return (

    <FullScreen handle={handle}>
      <section className='relative bg-custom-gray h-screen w-screen'>

          <div className="absolute flex top-0 left-0 w-[100%] h-[100%] justify-center items-center">
              <video 
                ref={videoRef}
                src="/images/paramount-pictures.mp4" 
                playsInline  
                width="100%" 
                height="100%"

                muted={volume}
                />

                {
                  subtitles
                  ? (<div className='absolute bottom-[100px] bg-black opacity-50 w-[70%] lg:[50%] py-4 px-2 text-center'>
                      This Clone Project Maded By Eren Tin from Zero!
                    </div>)
                  : null
                }
             
          </div>

          <div className={`${showDiv ? 'opacity-100' : 'opacity-0'} absolute flex flex-col bg-transparent items-center justify-around h-20 w-full bottom-0 px-[2%]`}
              style={{transition: 'opacity 0.1s ease-in'}}>
            <div className='flex justify-center w-full h-2'>
              <div className='bg-gray-600 w-[100%] rounded-md'>
                <div className={`relative bg-custom-red h-[100%] rounded-md`} style={{ width: currentTime ?  (currentTime * (100/duration) )+'%' : 0 , transition: 'width 0.3s ease-in'}}>
                  <div className='absolute bg-custom-red w-4 h-4 right-0 rounded-full translate-y-[-20%]'>

                  </div>
                </div>
              </div>
              <div></div>
            </div>

            <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-row gap-5 justify-between items-center'>
                {
                  isPlaying 
                  ? (<FaPause size={20} onClick={togglePlay} />) 
                  : (<FaPlay size={20} onClick={togglePlay} />)
                }

              
                <TiMediaRewind size={25} onClick={() => { setCurrentTimeControl(1)}} />
                <TiMediaFastForward size={25} onClick={() => { setCurrentTimeControl(2)}} />

                {
                  volume
                  ? <FaVolumeMute size={20} onClick={toggleVolume} />
                  : <FaVolumeUp size={20} onClick={toggleVolume} />
                }

              </div>
              <div>
                <strong>Billy on the Street </strong>
                <span>S2:E2 Scream for an American Girl</span>
              </div>
              <div className='flex flex-row gap-5'>
                <FaRegCircleQuestion size={20} />
                <LuLayoutList size={20} />

                {
                  subtitles 
                  ? <MdSubtitles size={20} onClick={toggleSubstitle} />
                  : <MdSubtitlesOff size={20} onClick={toggleSubstitle} />
                }

                {
                  handle.active
                  ? <RiFullscreenExitFill size={20} onClick={handle.exit} />
                  : <RiFullscreenFill  size={20} onClick={handle.enter}/>
                }
                
              </div>
            </div>
          </div>
        
          
      </section>
    </FullScreen>
  )
}

export default Watch