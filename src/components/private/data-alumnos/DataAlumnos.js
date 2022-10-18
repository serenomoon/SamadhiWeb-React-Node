import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAlumnoStore } from '../../../hooks/useAlumnoStore';
import { HomeNav } from '../../ui/HomeNav'
import { DataAlumnosList } from './DataAlumnosList';
const _ = require("lodash"); 

export const DataAlumnos = () => {

  const [trashoption, setTrashoption] = useState(false)
  const { alumnos, startLoadingAlumno } = useAlumnoStore();

  useEffect(() => {
    startLoadingAlumno();
  }, [])

  const alumnosPorClase = _.groupBy(alumnos, 'claseadd')


  return (
    
        <>
          <HomeNav />
          <div className='container'>
            <div className='clases__text mt-5'>
              <h4 className='clases__h4'>SAMADHI STUDIO</h4>
              <h1 className='clases__h1'>Administrar Alumnos</h1>
              <hr className='clases__hr'></hr>
            </div>

            <div className='datanoticias__buttons'>
                <Link to='/data/alumnos-add' style={{ textDecoration: 'none' }}>
                    <button className='btn btn-green'>AÑADIR</button>
                </Link>
                <Link to='' style={{ textDecoration: 'none' }}>
                    <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
                </Link>
            </div>
            
              
            { Object.keys(alumnosPorClase).map((item, i) => (


              <div key={i} className="panel panel-primary" id="result_panel">
                <div className="panel-heading">
                    <h3 className="dataalumnos__panel-title">{item}</h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group dataalumnos__list-group">

                    {alumnosPorClase[item].map((alumno,ind) =>
                      <DataAlumnosList 
                        key={ind}
                        alum = { alumno }
                        name={alumno.name}
                        lastname={alumno.lastname}
                        trashoption={trashoption}
                      />
                    )}  

                  </ul>
                </div>
              </div>

            ))}
    
          </div>
        </>
      
  )
}
