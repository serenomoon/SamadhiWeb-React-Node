import React from 'react'
import { yogaImages } from '../../../helpers/yogaImages'
import { Link } from 'react-router-dom'
import { useFacilitadorStore } from '../../../hooks/useFacilitadorStore';

export const DataFacilitadoresCard = ({trashoption, name, lastname, activity, uploadimg, facil}) => {
  
  const { setActiveFacilitador, startDeletingFacilitador } = useFacilitadorStore();
  

  const onSelect = ( facilitador ) => {
    setActiveFacilitador( facilitador );
  }

  const onDelete = ( facilitador ) => {
    startDeletingFacilitador(facilitador);
    window.location.reload(false);
  }
  
  return (
        <div className='col-4 clases__col animate__animated animate__fadeIn'>
            <div className="card clases__card" style={{width: '18rem'}}>
                <img className="card-img-top clases__img-card" src={uploadimg} alt="logo" />
                <div className="card-body datanoticias__card-text">
                    <h5 className="card-title clases__card-title">{name} {lastname}</h5>
                    <p className="card-text clases__card-text">{activity}</p>
                    <div className="card-text datanoticias__card-buttons">
                        <Link to={`/data/facilitadores-ver/${name}-${lastname}`} style={{textDecoration: 'none'}}>
                          <button className='btn btn-green' onClick={() => onSelect( facil )}>VER</button>
                        </Link>
                        {trashoption === true 
                        ?
                          <button className='btn btn-red' onClick={() => onDelete( facil )}><i data-fa-symbol="delete" className="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}