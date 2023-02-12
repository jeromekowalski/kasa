import React from 'react'
export default function ReviewsEmpty() {
  const number = 5
  const reviewsList = Array.from({ length: number }, (v, k) => k)

  return (
    <ul className="reviews">
      {reviewsList.map((data, index) => {
        return (
          <li className="icon-star icon-empty" key={index}>
            <span>{data}</span>
          </li>
        )
      })}
    </ul>
  )
}
