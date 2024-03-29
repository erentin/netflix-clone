import Hero from '@/components/HomeGuest/Hero/Hero'
import React from 'react'

import Image from 'next/image'
import IntroductionTv from '@/components/HomeGuest/IntroductionTv/IntroductionTv'
import HorizontalRule from '@/components/Global/HorizontalRule/HorizontalRule'

function HomeGuest() {
  return (
    <div className="mainGuestHome">
      
      <Hero />
      <HorizontalRule />
      <IntroductionTv />
      <HorizontalRule />

    </div>
  )
}

export default HomeGuest