import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import Tags from '../../components/Tags/Tags'
import Reviews from '../../components/Reviews/Reviews'
import Host from '../../components/Host/Host'
import Collapsible from '../../components/Collapsible/Collapsible'
import Logement from '../../datas/logement'

export default function ProductDetail() {
  const param = useParams()
  const filteredList = Logement.filter((item) => item.id === param.id)
  const navigate = useNavigate()
  const isNoId = filteredList.length === 0
  useEffect(() => {
    if (isNoId) {
      navigate('/*')
    }
  }, [isNoId, navigate])

  return (
    <div className="container">
      {filteredList.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <Slider img={data.pictures} />
            <div className="container-details">
              <div className="name-location-tag">
                <h1>{data.title}</h1>
                <p className="font-bold">{data.location}</p>
                <Tags name={data.tags} />
              </div>
              <div className="review-profile">
                <Reviews reviews={data.rating} />
                <Host profile={data.host} />
              </div>
            </div>
            <div className="grid">
              <Collapsible description={data.description} label="Description" />
              <Collapsible
                description={data.equipments.map((equipment, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      {equipment}
                    </div>
                  )
                })}
                label="Équipements"
              />
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
