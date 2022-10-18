import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useClaseStore } from '../../hooks'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const Clases = () => {

  const { clases, startLoadingClases, setActiveClase } = useClaseStore();


  useEffect(() => {
    startLoadingClases();
  }, [])


  return (
    <>
      <HomeNav />
      <div className='clases__clase'>
        <div className='container'>
          <div className='clases__text'>
            <h4 className='clases__h4'>SAMADHI STUDIO</h4>
            <h1 className='clases__h1'>Tipos de Clases</h1>
            <hr className='clases__hr'></hr>
            <p className='clases__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>
          <div className='row'>

          {clases.map((info, i)=>{
              return(
                  <div key={i} className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={info.uploadimg} alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">{info.title}</h5>
                              <p className="card-text clases__card-text text-limit">{info.message}</p>
                              <Link to={`/clase/${info.title}`} style={{textDecoration: 'none'}}>
                                <button className='btn btn-green' onClick={ () => setActiveClase(info) }>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>
            )})}


          </div>
        </div>
      </div>
      <Foot />
    </>
  )}

