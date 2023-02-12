import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/logo-kasa.svg'
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Logo} className="logo" alt="Logo Kasa" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
