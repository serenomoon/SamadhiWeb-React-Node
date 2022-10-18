import React from 'react';
import { Link } from 'react-router-dom';
import { useNoticiaStore } from '../../../hooks/useNoticiaStore';

export const DataNoticiasCard = ({trashoption, uploadimg, title, mensaje, noticia}) => {

  const { setActiveNoticia, startDeletingNoticia } = useNoticiaStore();
  

  const onSelect = ( notic ) => {
    setActiveNoticia( notic );
  }

  const onDelete = ( notic ) => {
    startDeletingNoticia( notic );
    window.location.reload(false);
  }

  return (
    <>
        <div className='col-4 clases__col animate__animated animate__fadeIn'>
            <div className="card clases__card" style={{width: '18rem'}}>
                <img className="card-img-top clases__img-card" src={uploadimg} alt="logo" />
                <div className="card-body datanoticias__card-text">
                    <h5 className="card-title clases__card-title">{title}</h5>
                    <p className="card-text clases__card-text text-limit">{mensaje}</p>
                    <div className="card-text datanoticias__card-buttons">
                        <Link to={`/data/noticias-ver/${title}`} style={{textDecoration: 'none'}}>
                          <button className='btn btn-green' onClick={() => onSelect( noticia )}>VER</button>
                        </Link>
                        {trashoption === true 
                        ?
                          <button className='btn btn-red' onClick={() => onDelete( noticia )}><i data-fa-symbol="delete" className="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
