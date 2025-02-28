import React from 'react'

const MeetExperts = ({contactRef}) => {
    const experts = [
        {
          name: "Chef Tom Miller",
          role: "Head Chef",
          image: '/icons/boyone.svg',
        },
        {
          name: "Chef Sara Kim",
          role: "Pastry Chef",
          image: '/images/girl.png',
        },
        {
          name: "Chef Mark Wilson",
          role: "Sous Chef",
          image: '/icons/boytwo.svg' ,
        },
      ]
  return (
    <section ref={contactRef} className="px-4 bg-[#311F1B] py-16 md:px-8 lg:px-16">
      
      <div className="text-center mb-12">
        <div className="text-red-300 uppercase tracking-wider text-sm font-medium mb-2">Our Experts</div>
        <h2 className="text-3xl text-white font-bold">Let's meet the expert.</h2>
      </div>
        <img src="/images/burger.png" className='h-26 w-26 absolute top-765 right-10 lg:h-48 lg:w-48 lg:top-402 lg:right-20' alt="" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {experts.map((expert, index) => (
          <div key={index} className="text-center">
            <div className="relative mx-auto mb-4 w-48 h-48">
                <img src="/icons/Linkedin.svg" alt="" className='h-28 w-28 absolute right-2 top-26' />
              <img
                src={expert.image}
                alt={expert.name}
                className='w-50 h-50'
              />
            </div>
            <h3 className="font-semibold text-white text-xl">{expert.name}</h3>
            <p className="text-[#eeeaded3]">{expert.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MeetExperts