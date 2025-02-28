import React from 'react'
import Gallery from './gallery/Gallery.jsx'
import NewsLetter from './newsLetter/NewsLetter.jsx'
import Footer from './footer/Footer.jsx'

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