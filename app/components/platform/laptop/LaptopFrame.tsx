import  { ReactNode } from 'react'

function LaptopFrame({children}: {children :ReactNode }) {
  return (
    <div className='flex flex-col h-[420px] w-[720px]  '>
      {/* lid */}
      <div className='relative h-[404px] rounded-t-[18px] bg-gradient-to-b from-[#1b232b] to-[#0b0f14] p-2 ring-1 ring-black/40  '>
{/* Webcam dot */}
        <span className="absolute left-1/2 top-[3px] size-[3px] -translate-x-1/2 rounded-full bg-[#2b3640]" />

  {/* screen */}
 <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white">
   {children}
      {/* Glass shine */}
          <div className=" absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
 </div>
       </div>

       {/* base */}
     <div className='relative h-4  rounded-b-[14px] bg-gradient-to-b from-[#dfe4e8] to-[#a6b0b8]'>
 <div className="absolute left-1/2 top-0 h-[5px] w-[110px] -translate-x-1/2 rounded-b-md bg-[#8d98a1]" />
     </div>
    </div>
  )
}

export default LaptopFrame
