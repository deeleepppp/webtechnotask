import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";

const NewsLetter = ({aboutRef}) => {
  return (
    <section ref={aboutRef} className="px-4 py-12 md:px-8  lg:px-16 my-16">
        <img src="/images/soup.png" className='absolute right-4 z-1 h-20 w-20 lg:right-10 lg:h-60 lg:w-60' alt="" />
      <div className="bg-[#DD6952] lg:h-70 rounded-l lg:rounded-tr-full p-8  md:p-12 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-white uppercase tracking-wider text-sm font-medium mb-2 text-center">Newsletter</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Subscribe our newsletter.</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full bg-black text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center">
              <LuSendHorizontal className="h-4 w-4 mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter