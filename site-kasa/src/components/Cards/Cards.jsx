import React from 'react'
import Loader from '../Loader/Loader'
import Logement from '../../datas/logement'
import { Link } from 'react-router-dom'
export default function Cards() {
  if (!Logement || Logement.length === 0) {
    return <Loader />
  }

  return (
    <React.Fragment>
      {Logement &&
        Logement.map((logement, index) => {
          return (
            <div className="cards" key={index}>
              <Link to={`/fiche-logement/${logement.id}`}>
                <img alt="miniature" src={logement.cover} />
                <h2>{logement.title}</h2>
              </Link>
            </div>
          )
        })}
    </React.Fragment>
  )
}
