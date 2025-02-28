import React from 'react'
import Gallery from './Gallery.jsx'
import NewsLetter from './NewsLetter.jsx'
import Footer from './Footer.jsx'

const Gnf = ({menuRef,aboutRef}) => {
  return (
    <div className='bg-[#121212]'>
               <Gallery menuRef={menuRef}/>
               <NewsLetter aboutRef={aboutRef}/>
               <Footer/>
    </div>
  )
}

export default Gnf