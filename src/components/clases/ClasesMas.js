import React from 'react';
import { useClaseStore } from '../../hooks/useClaseStore';
import { Foot } from '../home/Foot';
import { HomeNav } from '../ui/HomeNav';


export const ClasesMas = () => {

  const { activeClase } = useClaseStore();

  const { title, uploadimg, message } = activeClase;

  return (
    <>
      <HomeNav />
      <div className='container clasesmas__new animate__animated animate__fadeIn'>
          <img src={ uploadimg } className='cardnews__img' alt='news'/>
          <div className='clasesmas__text'>
            <h1>{ title }</h1>
            <p>
              { message }
            </p>
            <button className='btn clasesmas__btn'><i className="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )}
// }
