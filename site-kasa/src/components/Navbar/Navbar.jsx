import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link className="home" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="about" to="/a-propos">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
