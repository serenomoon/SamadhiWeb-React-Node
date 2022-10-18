import React from 'react'
import { useFacilitadorStore } from '../../hooks';
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const Facilitador = () => {

    const { activeFacilitador } = useFacilitadorStore();

    const { name, lastname, activity, bio, service, uploadimg } = activeFacilitador;


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
                <h5 className='facilitador__col-title'>Bio<hr/></h5>
                <p>{bio}</p>
                <h5 className='facilitador__col-title'>Servicio<hr/></h5>
                <p>{service}</p>
            </div>
        </div>
    </div>
    <Foot />
    </>
  )}
// }
