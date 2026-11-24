import React from 'react'

function WaveMaskDef() {
  return (
   <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <clipPath id="wave-mask" clipPathUnits="objectBoundingBox">
          <path d="M0,0.08 C0.15,0 0.3,0.12 0.5,0.06 C0.7,0 0.85,0.1 1,0.04 L1,0.92 C0.85,1 0.7,0.88 0.5,0.95 C0.3,1 0.15,0.9 0,0.97 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default WaveMaskDef
