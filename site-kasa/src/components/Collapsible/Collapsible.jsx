import React, { useState } from 'react'
import Arrows from '../../assets/arrow.svg'
export default function Collapsible(props) {
  const [open, setOPen] = useState(false)
  const toggle = () => {
    setOPen(!open)
  }
  return (
    <div className="collapse">
      <button className={open ? 'btn active' : 'btn'} onClick={toggle}>
        {props.label}
        <img className="arrow" src={Arrows} alt="fleche" />
      </button>

      {open && (
        <div className={open ? 'body active' : 'body'}>
          <div>{props.description}</div>
        </div>
      )}
    </div>
  )
}
