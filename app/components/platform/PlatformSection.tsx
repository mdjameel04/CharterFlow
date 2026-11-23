import React from 'react'
import PhoneFrame from './phone/PhoneFrame'
import PhoneScreen from './phone/PhoneScreen'

function PlatformSection() {
  return (
    <div className='flex items-center justify-center mt-2'>
      <PhoneFrame>
        <PhoneScreen/>
      </PhoneFrame>
    </div>
  )
}

export default PlatformSection
