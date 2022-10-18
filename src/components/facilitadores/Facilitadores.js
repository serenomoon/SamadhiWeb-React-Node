import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFacilitadorStore } from '../../hooks'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'
const _ = require("lodash"); 

export const Facilitadores = () => {

  const { facilitadores, startLoadingFacilitadores, setActiveFacilitador } = useFacilitadorStore();


  useEffect(() => {
    startLoadingFacilitadores();
  }, [])

  const onSelect = (facil) => {
    setActiveFacilitador(facil)
  }


  const facilitadoresPorClase = _.groupBy(facilitadores, 'claseadd')

  return (
    <>
      <HomeNav />
      <div className='about__clase'>
        <div className='container'>
          <div className='about__text'>
            <h4 className='about__h4'>SAMADHI STUDIO</h4>
            <h1 className='about__h1'>Facilitadores</h1>
            <hr className='about__hr'></hr>
            <p className='about__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>

          <div className='about__tipo-clase'>
          

          {Object.keys(facilitadoresPorClase).map((item, i) => (
              <div key={i} className='row'>
                <h1>{item}</h1>
                {facilitadoresPorClase[item].map((facilitador,ind) =>
                    <div key={ind} className='col-4 about__col animate__animated animate__fadeIn'>
                        <div className="card about__card" style={{width: '18rem'}}>
                          <Link onClick={ () => onSelect(facilitador) } to={`/facilitador/${facilitador.name}-${facilitador.lastname}/`}>
                            <img className="card-img-top about__img-card" src={facilitador.uploadimg} alt="logo" />
                          </Link>
                          <div className="card-body">
                              <h5 className="card-title about__card-title">{facilitador.name} {facilitador.lastname}</h5>
                              <p className="card-text about__card-text">{facilitador.activity}</p>
                          </div>
                        </div>
                    </div>)}
                  
              </div>))}

          </div>
        </div>
      </div>

      <Foot />
    </>
  )}


