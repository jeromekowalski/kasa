import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="not-found container text-center">
      <h1 className="font-bold">404</h1>
      <p>Oups ! La page vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
