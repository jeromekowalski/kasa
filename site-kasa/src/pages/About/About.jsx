import React from 'react'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Collapsible from '../../components/Collapsible/Collapsible'
import Abouts from '../../datas/a-propos.json'
import AboutImg from '../../assets/about.jpg'

export default function About() {
  useEffect(() => {
    const activeHome = document.querySelector('.about')
    activeHome.classList.add('active')
    return () => {
      activeHome.classList.remove('active')
    }
  }, [])
  return (
    <div className="container">
      <Hero img={AboutImg} />
      {Abouts.map((data, index) => {
        return (
          <div key={index}>
            <Collapsible description={data.description} label={data.title} />
          </div>
        )
      })}
    </div>
  )
}
