import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeNav } from '../../ui/HomeNav'

export const DataClasesVer = () => {

  const { activeClase } = useSelector( state => state.clases );

  const { title, message, uploadimg, date, id } = activeClase;

  return (
    <>
        <HomeNav />

        <div className='container facilitador__facilitador'>
          <div className='facilitador__title'>
              <h1>{ title }</h1>
              <span>{ date }</span>
          </div>
          <div className='row facilitador__row'>
              <div className='col-6 facilitador__col-img animate__animated animate__fadeInLeft'>
                  <img src={ uploadimg } alt="logo" />
              </div>
              <div className='col-6 facilitador__col-text animate__animated animate__fadeInRight'>
                  <h5 className='facilitador__col-title'>Titulo<hr/></h5>
                  <p>{ title }</p>
                  <h5 className='facilitador__col-title'>Mensaje<hr/></h5>
                  <p>{ message }</p>
                  <h5 className='facilitador__col-title'>Día y hora<hr/></h5>
                  <p>{ date }</p>
                  <Link to={`/data/clases-actualizar/${title}`}>
                      <button className='btn btn-green'>Editar</button>
                  </Link>
              </div>
          </div>
        </div>
    </>
  )
}
