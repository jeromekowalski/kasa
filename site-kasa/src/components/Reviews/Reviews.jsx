import React from 'react'
import ReviewsEmpty from './ReviewsEmpty'
import ReviewsFull from './ReviewsFull'
export default function Reviews({ reviews }) {
  return (
    <div className="container-reviews">
      <ReviewsEmpty />
      <ReviewsFull reviews={reviews} />
    </div>
  )
}
