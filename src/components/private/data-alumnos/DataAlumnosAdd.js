import { useForm } from '../../../hooks/useForm'
import { Form } from 'react-bootstrap'
import { HomeNav } from '../../ui/HomeNav'
import { useNavigate } from 'react-router-dom';
import { useAlumnoStore } from '../../../hooks/useAlumnoStore';
import { useClaseStore } from '../../../hooks/useClaseStore';
import { useEffect } from 'react';
const axios = require('axios');


const alumnoFormField = {
    name: '',
    lastname: '',
    email: '',
    address: '',
    cellphone: '',
    date: '',
    claseadd: '',
    user: {
        _id: '',
        name: ''
    }
}

export const DataAlumnosAdd = () => {

    const { name, lastname, email, address, cellphone, claseadd, onInputChange }  = useForm( alumnoFormField );
    const { clases, startLoadingClases } = useClaseStore();
    const { startSavingAlumno } = useAlumnoStore();

    useEffect(() => {
        startLoadingClases();
      }, [])

    const navigate = useNavigate();


    const alumnoSubmit = ( event ) => {
        event.preventDefault();
        startSavingAlumno( { name: name, lastname: lastname, email: email, address: address, cellphone: cellphone, claseadd: claseadd, date: new Date().toString() })

        navigate("/data/alumnos");
    }

    

  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nuevo Alumno</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form' onSubmit={ alumnoSubmit }>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        name='name'
                        autoComplete='off' 
                        value={name}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Apellido"
                        name='lastname'
                        autoComplete='off' 
                        value={lastname}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name='email'
                        autoComplete='off'
                        value={email}
                        onChange={onInputChange} 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Direccion"
                        name='address'
                        autoComplete='off' 
                        value={address}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Teléfono"
                        name='cellphone'
                        autoComplete='off'
                        value={cellphone}
                        onChange={onInputChange} 
                    />
                </Form.Group>

                <Form.Select 
                    aria-label="Clase"
                    onChange={onInputChange}
                    value={claseadd}
                    name="claseadd"
                    >
                    <option>Clase</option>
                    {clases.map( (clase, i) =>{
                       return(
                           <option key={ i } value={clase.title}>{clase.title}</option>
                       )
                    })}
                </Form.Select>
                

                <button className='btn btn-green mt-4' type="submit">
                    Añadir
                </button>
            </Form>
         </div>
    </>
  )
}
