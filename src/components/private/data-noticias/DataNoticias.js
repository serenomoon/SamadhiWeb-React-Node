import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNoticiaStore } from '../../../hooks/useNoticiaStore'
import { HomeNav } from '../../ui/HomeNav'
import { DataNoticiasCard } from './DataNoticiasCard'

export const DataNoticias = () => {

  const [trashoption, setTrashoption] = useState(false)
  const { noticias, startLoadingNoticias, activeNoticia } = useNoticiaStore();

  useEffect(() => {
    startLoadingNoticias();
  }, [])

 
  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Noticias</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/noticias-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
          </Link>
        </div>
      
        <div className='row'>
        {noticias.map( (noticia,i) => {
              if(!noticia){
                return <div>Loading..</div>
                } else {
                  return(
                  <DataNoticiasCard 
                    key = { i }
                    test= { activeNoticia }
                    noticia = { noticia }
                    trashoption = { trashoption }
                    uploadimg = { noticia.uploadimg }
                    title = { noticia.title }
                    mensaje = { noticia.message }
                  />
                  )
                  
                }}
            )}            
        </div>
      </div>
    </>
  )}

