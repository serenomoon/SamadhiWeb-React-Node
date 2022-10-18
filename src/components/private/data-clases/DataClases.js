import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useClaseStore } from '../../../hooks/useClaseStore'
import { HomeNav } from '../../ui/HomeNav'
import { DataClasesCard } from './DataClasesCard'

export const DataClases = () => {

  const [trashoption, setTrashoption] = useState(false)
  const { clases, activeClase, startLoadingClases } = useClaseStore();

  useEffect(() => {
    startLoadingClases();
  }, [])

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Clases</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/clases-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
          </Link>
        </div>

        <div className='row'>
        {clases.map( (clase,i) => {
              if(!clase){
                return <div>Loading..</div>
                } else {
                  return(
                  <DataClasesCard 
                    key = { i }
                    test= { activeClase }
                    clase = { clase }
                    trashoption = { trashoption }
                    uploadimg = { clase.uploadimg }
                    title = { clase.title }
                    mensaje = { clase.message }
                  />
                  )
                  
                }}
            )}            
        </div>
      </div>
    </>
  )
}
