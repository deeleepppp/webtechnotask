import React from 'react'

const Gallery = ({menuRef}) => {
    
      return (
        <section ref={menuRef} className=" px-4 py-16 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="text-red-300 uppercase tracking-wider text-sm font-medium mb-2">Our Gallery</div>
            <h2 className="text-3xl text-white font-bold">Gallery of our cooked food.</h2>
          </div>
    
    
              <div  className="overflow-hidden lg:ml-110 mx-auto  rounded-xl flex gap-2">
                <div className=' h-80 w-40  '>
                    <div className=' h-54 w-40 '>
                       <img className='object-cover rounded-xl' src="/images/foodone.jpg" alt="Salad dish" />
                    </div>
                    <div  className='h-20 w-40'>
                       <img className='object-cover rounded-xl' src="/images/foodtwo.jpg" alt="Vegetable stir fry" />
                    </div>
                </div>
                <div>
                      <div className='h-20 mb-8 w-40'>
                            <img className='object-cover rounded-xl' src="/images/foodthree.jpg" alt="Pasta dish" />
                      </div>
                      <div className= 'h-60 w-40 '>
                            <img className='object-cover rounded-xl' src="/images/foodfour.jpg" alt="Pizza" />
                      </div>
               
                </div>
          
          </div>
        </section>
      )
}

export default Gallery