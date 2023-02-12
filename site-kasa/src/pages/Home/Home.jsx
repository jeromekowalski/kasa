import React from 'react'
import { useEffect } from 'react'
import Cards from '../../components/Cards/Cards'
import Hero from '../../components/Hero/Hero'
import HomeImg from '../../assets/home.jpg'
export default function Home() {
  useEffect(() => {
    const activeHome = document.querySelector('.home')
    activeHome.classList.add('active')
    return () => {
      activeHome.classList.remove('active')
    }
  }, [])
  return (
    <div className="container">
      <Hero img={HomeImg} title="Chez vous, partout et ailleurs" />
      <div className="product-cards">
        <Cards />
      </div>
    </div>
  )
}
