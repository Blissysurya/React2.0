import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='h-96 w-60 m-4 mt-16  relative  rounded-2xl  pointer-events-none'>
          <div className='relative h-full w-full rounded-xl overflow-hidden '>
                  <img className='h-full w-full object-cover ' src={props.img}></img>
          
                   <div className='h-64 z-10 w-full absolute bottom-0 rounded-b-xl backdrop-blur-sm bg-gradient-to-t from-white via-white/70 to-transparent [mask-image:linear-gradient(to_top,black,transparent)]'>
                   </div>

                  <div className='absolute bottom-6 z-20 w-full px-2'>
                      <h1 className='text-xl font-semibold text-gray-900'>{props.name}  <i class="ri-verified-badge-fill text-xl text-green-800"></i></h1>
                      <p className='text-sm '>{props.role}</p>

                      <div className='flex justify-around items-center text-gray-800 mt-4'>
                        <i class="ri-user-line"><span className='text-xs'>{props.followers}</span></i>
                        <i className="ri-checkbox-multiple-line"><span className='text-xs'>{props.projects}</span></i>
                        <div className='bg-white px-4 py-2 rounded-3xl'>
                          Follow <i class="ri-add-fill"></i>
                        </div>
                      </div>
                  </div>
4          </div>
        </div>
    </>
  )
}

export default Card