import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 bg-[#050403] flex items-center justify-between px-10'>
            <div className='text-white text-3xl'>
                DVSY    
            </div>

            <div className='flex gap-3'>
                <div className='bg-[#616161] text-white p-2 rounded'>
                    DESIGNERS
                </div>
                <div className='bg-[#616161] text-white p-2 rounded'>
                    COLLABS
                </div>
                <div className='bg-[#616161] text-white p-2 rounded'>
                    EVENTS
                </div>
                <div className='bg-[#616161] text-white p-2 rounded'>
                    BLOG
                </div>
                <div className='bg-[#616161] text-white p-2 rounded'>
                    CARD
                </div>
                <div className='bg-[#e3715d]  p-2 rounded'>
                    GET IN TOUCH
                </div>
            </div>
    </div>
  )
}

export default Nav