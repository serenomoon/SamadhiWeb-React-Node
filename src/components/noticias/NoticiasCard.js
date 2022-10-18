import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from '../../helpers/animateScroll';
import { useNoticiaStore } from '../../hooks';
const axios = require('axios');

export const NoticiasCard = ({title,date,mensaje,uploadimg,noti}) => {

  const { setActiveNoticia } = useNoticiaStore();
  
  const onSelect = (notic) => {
    setActiveNoticia(notic)
  }
  
  window.addEventListener("scroll", animateScroll);
 
  return (
    <>
      <section>
      <div className="container cardnews__reveal">
        <div className="text-container">
          <div className="text-box cardnews__left-textbox">
            <h3>{title}</h3>
            <span>{date}</span>
            <p className="text-limit">
              {mensaje}
            </p>
            <Link to={`noticias/${title}`} style={{textDecoration: 'none'}}>
              <button onClick={ ()=> onSelect(noti) } className='cardnews__btn btn'>LEER MAS</button>
            </Link>
          </div>
          <div className="text-box">
            <img src={uploadimg} className='cardnews__img' alt='news'/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
};
