import React from 'react'

const Experts = ({recipesRef}) => {
  return (
    <section ref={recipesRef} className="px-4 py-16 md:px-8 lg:px-16 bg-[#121212]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 relative mb-10 md:mb-0">
          <div className="relative">
            <div className="absolute -z-10 w-64 h-64 rounded-full bg-white/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="public/images/cook.png"
              alt="Chef with food"
              width={450}
              height={550}
              className="relative z-10 rounded-2xl"
            />
          </div>

          <div className="absolute top-10 left-0 w-8 h-8 rounded-full bg-green-500"></div>
        </div>

        <div className="md:w-1/2 md:pl-12">
          <div className="text-red-300 uppercase tracking-wider text-sm font-medium mb-2">Cooking with us</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Cooking together with the expert.</h2>
          <p className="text-[#eeeaded3] mb-8">
            Join our professional chefs and learn the secrets behind creating amazing dishes. Our experts will guide you
            through each step, sharing tips and techniques that will transform your cooking skills.
          </p>
          <p className="text-[#eeeaded3] mb-8">
            Whether you're a beginner or looking to refine your skills, our chefs are here to help you become confident
            in the kitchen.
          </p>
          <a
            href="#"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experts