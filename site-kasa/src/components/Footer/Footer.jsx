import React from 'react'
import Logo from '../../assets/logo-kasa-white.svg'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img src={Logo} className="logo" alt="Logo Kasa" />
        <p>2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
