import React from 'react'
import Hero from './hero/Hero'
import Features from './features/Features'
import Experts from './experts/Experts'
import MeetExperts from './meetExperts/MeetExperts'
import Gnf from './Gnf'

const Combination = ({menuRef,featuresRef,aboutRef,contactRef,recipesRef}) => {
  return (
    <>
        <Hero menuRef={menuRef} featuresRef={featuresRef} aboutRef={aboutRef} contactRef={contactRef} recipesRef={recipesRef}/>
        <Features featuresRef={featuresRef}/>
        <Experts recipesRef={recipesRef}/>
        <MeetExperts contactRef={contactRef}/>
        <Gnf menuRef={menuRef} aboutRef={aboutRef}/>
    </>
  )
}

export default Combination