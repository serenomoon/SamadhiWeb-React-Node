import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFacilitadorStore } from '../../../hooks/useFacilitadorStore'
import { HomeNav } from '../../ui/HomeNav'
import { DataFacilitadoresCard } from './DataFacilitadoresCard'
const _ = require("lodash"); 

export const DataFacilitadores = () => {

  const [trashoption, setTrashoption] = useState(false)
  const { facilitadores, startLoadingFacilitadores } = useFacilitadorStore();

  useEffect(() => {
    startLoadingFacilitadores();
  }, [])

  const facilitadoresPorClase = _.groupBy(facilitadores, 'claseadd')

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Facilitadores</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/facilitadores-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
          </Link>
        </div>

        {Object.keys(facilitadoresPorClase).map((item, i) => (

                <div key={i} className='about__tipo-clase'>
                  <h1 className='mt-5'>{item}</h1>
                  <div className='row'>
                    {facilitadoresPorClase[item].map((facilitador,ind) =>
                        
                          <DataFacilitadoresCard 
                              key={ ind }
                              facil={ facilitador }
                              id={ facilitador.id }
                              trashoption={ trashoption }
                              name = { facilitador.name }
                              lastname = { facilitador.lastname } 
                              activity = { facilitador.activity }
                              uploadimg = { facilitador.uploadimg }
                          />
                        
                    )}
                  </div>   
                </div>
            ))
          }
        

      </div>
    </>
  )}
