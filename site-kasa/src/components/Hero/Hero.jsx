import React from 'react'
export default function Hero(props) {
  return (
    <div className="hero">
      <img src={props.img} alt="paysage" />
      <h1>{props.title}</h1>
    </div>
  )
}
