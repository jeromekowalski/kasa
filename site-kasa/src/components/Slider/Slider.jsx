import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
export default function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if (slideIndex !== props.img.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === props.img.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(props.img.length)
    }
  }
  return (
    <div className="container-slider">
      {props.img.map((picture, index) => {
        return (
          <div
            key={picture}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img src={picture} alt="ambiance de l'appartement" />
          </div>
        )
      })}
      {props.img.length > 1 && (
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      )}
      {props.img.length > 1 && (
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
      )}
      <div className="container-number">
        <div>{slideIndex}</div> <div>/</div> <div>{props.img.length}</div>
      </div>
    </div>
  )
}
