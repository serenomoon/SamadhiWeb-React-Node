import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { HomeNav } from '../../ui/HomeNav'
const axios = require('axios');

export const DataAlumnosVer = () => {

  const { activeAlumno } = useSelector( state => state.alumnos );
  const { name, lastname, email, address, cellphone, claseadd } = activeAlumno;

  return (
    <>
        <HomeNav />
        <div className='container facilitador__facilitador'>
          <div className='facilitador__title'>
              <h1>{name} {lastname}</h1>
              <span>{claseadd}</span>
          </div>
          <div className='row facilitador__row'>
              <div className='col-12 facilitador__col-text animate__animated animate__fadeInRight'>
                  <h5 className='facilitador__col-title'>Email<hr/></h5>
                  <p>{email}</p>
                  <h5 className='facilitador__col-title'>Direccion<hr/></h5>
                  <p>{address}</p>
                  <h5 className='facilitador__col-title'>Teléfono<hr/></h5>
                  <p>{cellphone}</p>
                  <Link to={`/data/alumnos-actualizar/${name}-${lastname}`}>
                      <button className='btn btn-green'>Editar</button>
                  </Link>
              </div>
          </div>
        </div>
    </>
  )
}
// }
