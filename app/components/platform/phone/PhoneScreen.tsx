import {  ArrowRight, BatteryFull,  ChevronDown,  ChevronLeft,  Signal, Wifi } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { phoneScreen } from '../data';

function PhoneScreen() {
  return (
    <div className='relative flex h-full w-full flex-col select-text bg-gradient-to-b from-white to-[#e9f4f6] text-[#0b2338] ' >
      {/* background image */}
      <div className='relative h-[150px] w-full shrink-0  ' >
         <Image 
         src={"/phone-img.png"}
         alt='ship-image'
          fill
          priority
         className='object-center object-cover '
         />
              {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

{/* Status bar */}
        <div className="absolute inset-x-0 top-[6px] flex items-center justify-between px-4 text-[8px] font-bold text-white">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <Signal className="size-2" />
            <Wifi className="size-2" />
            <BatteryFull className="size-2.5" />
          </span>
        </div>

 {/* App header */}
        <div className="absolute inset-x-0 top-[28px] flex items-center gap-1.5 px-3">
          <ChevronLeft className="size-3.5 text-white" strokeWidth={2.5} />
        
        </div>
      </div>
 
      {/* Form */}
      <div className="flex flex-1 flex-col px-3 pb-5 pt-2.5">
        <h4 className="text-[15px] font-extrabold tracking-tight">
          {phoneScreen.heading}
        </h4>
 
        <ul className="mt-2 space-y-1.5">
          {phoneScreen.fields.map(({ label, value, icon: Icon, dropdown }) => (
            <li
              key={label}
              className="flex h-[30px] items-center gap-2 rounded-lg bg-white px-2.5 shadow-sm ring-1 ring-black/5"
            >
              <Icon className="size-3 shrink-0 text-[#078f83]" strokeWidth={2} />
              <span className="flex-1 truncate text-[9px] font-semibold">
                {value}
              </span>
              {dropdown && <ChevronDown className="size-3 text-[#647887]" />}
            </li>
          ))}
        </ul>
 
        <span className="mt-auto flex h-[30px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#2bc99a] to-[#0fae87] text-[10px] font-bold text-white shadow-[0_6px_14px_rgba(15,174,135,0.45)]">
          {phoneScreen.cta}
          <ArrowRight className="size-3" />
        </span>
      </div>
 
      {/* Home indicator */}
      <span className="absolute bottom-1.5 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-black/70" />
    </div>
  );
}
 


export default PhoneScreen
