import React from 'react'

export default function Host(props) {
  const name = props.profile.name
  const split_name = name.split(' ')
  const first_name = split_name[0]
  const last_name = split_name[1]
  return (
    <div className="host">
      <div className="name">
        <div>{first_name}</div>
        <div>{last_name}</div>
      </div>
      <img alt={props.profile.name} src={props.profile.picture} />
    </div>
  )
}
