import React, { ReactNode } from 'react'

function PhoneFrame({children}: {children : ReactNode} ) {
  return (
    <div className='relative h-[380px] w-[170px] rounded-[34px] bg-linear-to-b from-[#2a323a] to-[#0b0f14] p-[6px] ring-1 ring-black/50 '> 
      
      {/* side buttons */}
      <span className='absolute -left-[2px] top-[70px] h-[22px] w-[3px] rounded-lg bg-[#1b232b]  ' />
       <span className="absolute -left-[2px] top-[100px] h-[34px] w-[3px] rounded-l bg-[#1b232b]" />
      <span className="absolute -right-[2px] top-[96px] h-[46px] w-[3px] rounded-r bg-[#1b232b]" />

         {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
        {children}

        {/* Dynamic island */}
        <span className="absolute left-1/2 top-[7px] z-20 h-[15px] w-[58px] -translate-x-1/2 rounded-full bg-black" />

        {/* Glass shine */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
      </div>
    </div>
  )
}

export default PhoneFrame
