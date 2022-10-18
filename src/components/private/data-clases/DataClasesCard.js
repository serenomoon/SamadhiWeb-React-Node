import { Link } from 'react-router-dom'
import { useClaseStore } from '../../../hooks/useClaseStore';

export const DataClasesCard = ({trashoption, uploadimg, title, mensaje, clase}) => {
  
  const { setActiveClase, startDeletingClase } = useClaseStore();
  

  const onSelect = ( clas ) => {
    setActiveClase( clas );
  }

  const onDelete = ( clas ) => {
    startDeletingClase(clas );
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
                        <Link to={"/data/clases-ver/" + title} style={{textDecoration: 'none'}}>
                          <button className='btn btn-green' onClick={ () => onSelect( clase ) }>VER</button>
                        </Link>
                        {trashoption === true 
                        ?
                        <Link to={"/data/clases"} style={{textDecoration: 'none'}}>
                          <button className='btn btn-red' onClick={ () => { onDelete( clase ) }}><i data-fa-symbol="delete" className="fas fa-trash fa-fw"></i></button>
                        </Link>
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
