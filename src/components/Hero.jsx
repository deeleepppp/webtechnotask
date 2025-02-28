import React, { useState } from 'react'
import Navbar from "./Navbar";

const Hero = ({aboutRef,recipesRef,menuRef,contactRef,featuresRef}) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [active, setActive] = useState("login");
  return (
    <div className='bg-[#384152]'>
        <Navbar menuRef={menuRef} aboutRef={aboutRef} contactRef={contactRef} recipesRef={recipesRef}/>
    <section className="relative px-4 py-8 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  font-[Playfair Display] text-white mb-6"> 
            Cook anything <br />
            with the experts
          </h1>
          <p className="text-gray-400 mb-8  max-w-md">
            Learn to cook delicious meals with professional chefs guiding you every step of the way
          </p>
          <div className="flex space-x-4  ">
          <button
            onClick={() => {
              setActive("login")
              scrollToSection(featuresRef)
            }}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-all ${
              active === "login" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            Get Started
          </button>
          <button
            onClick={() => {
              setActive("signup")
              scrollToSection(contactRef)
            }}
            className={`cursor-pointer rounded-full px-4 py-2  text-sm transition-all ${
              active === "signup" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            Our chef
          </button>
            
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10 ">
            <img
              src="/images/banner-image.png"
              alt="Chef cooking"
              width={400}
              height={500}
              className="relative z-10"
            />
          </div> 
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero