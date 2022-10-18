import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { useClaseStore } from '../../hooks'
import { ClasesCallCards } from './ClasesCallCards'

export const ClasesCall = () => {

    const { clases, startLoadingClases } = useClaseStore();

    useEffect(() => {
        startLoadingClases();
      }, [])

  return (
    <div className='clasescall__back'>
        <div className='container clasescall__container'>

            <div className='row clasescall__row1'>
                <div className='col-6'>
                    <h3 className='clasescall__title'>Empeza a practicar!</h3>
                    <p className='clasescall__text'>Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex
                    Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex
                    Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex.</p>
                </div>

                <div className='col-6 clasescall__divimg'>
                    <img className="card-img-top clasescall__img" src={ yogaImages(`./stretch3.png`) } alt="clases" />
                </div>
            </div>

            <div className='row clasescall__row2'>

                {clases.slice(0,3).map((clase, i) =>{
                    return(
                    <ClasesCallCards
                        key = { i }
                        title = { clase.title }
                        mensaje = { clase.message }
                        uploadimg = { clase.uploadimg }
                    />
                    )})
                }

            </div>
            
            <Link to='/clases' style={{ textDecoration: 'none' }}>
                <button className='clasescall__btn btn btn-green'>VER MAS</button>
            </Link>
        </div>
    </div>
  )
}
