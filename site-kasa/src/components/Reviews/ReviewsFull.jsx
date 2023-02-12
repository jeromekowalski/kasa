import React from 'react'
export default function ReviewsFull({ reviews }) {
  const number = reviews
  const reviewsList = Array.from({ length: number }, (v, k) => k)

  return (
    <ul className="reviews reviews-full">
      {reviewsList.map((data, index) => {
        return (
          <li className="icon-star icon-full" key={index}>
            <span>{data}</span>
          </li>
        )
      })}
    </ul>
  )
}
