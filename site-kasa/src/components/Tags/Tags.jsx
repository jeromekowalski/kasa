import React from 'react'
export default function Tags({ name }) {
  return (
    <ul className="tag">
      {name.map((tag, index) => {
        return <li key={index}>{tag}</li>
      })}
    </ul>
  )
}
