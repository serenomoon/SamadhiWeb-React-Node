import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeNav } from '../../ui/HomeNav'

export const DataFacilitadoresVer = () => {

  const { activeFacilitador } = useSelector( state => state.facilitadores );

  const { name, lastname, email, uploadimg, address, cellphone, bio, service, claseadd, activity } = activeFacilitador;

  return (
    <>
        <HomeNav />

        <div className='container facilitador__facilitador'>
          <div className='facilitador__title'>
              <h1>{name} {lastname}</h1>
              <span>{activity}</span>
          </div>
          <div className='row facilitador__row'>
              <div className='col-6 facilitador__col-img animate__animated animate__fadeInLeft'>
                  <img src={uploadimg} alt="logo" />
              </div>
              <div className='col-6 facilitador__col-text animate__animated animate__fadeInRight'>
                  <h5 className='facilitador__col-title'>Email<hr/></h5>
                  <p>{email}</p>
                  <h5 className='facilitador__col-title'>Direccion<hr/></h5>
                  <p>{address}</p>
                  <h5 className='facilitador__col-title'>Teléfono<hr/></h5>
                  <p>{cellphone}</p>
                  <h5 className='facilitador__col-title'>Bio<hr/></h5>
                  <p>{bio}</p>
                  <h5 className='facilitador__col-title'>Servicio<hr/></h5>
                  <p>{service}</p>
                  <h5 className='facilitador__col-title'>Clase<hr/></h5>
                  <p>{claseadd}</p>
                  <Link to={`/data/facilitadores-actualizar/${name}-${lastname}`}>
                      <button className='btn btn-green'>Editar</button>
                  </Link>
              </div>
          </div>
        </div>
    </>
  )
}

