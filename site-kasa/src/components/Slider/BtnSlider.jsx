import React from 'react'
import Arrows from '../../assets/arrow.svg'
export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img src={Arrows} alt="arrow" />
    </button>
  )
}
