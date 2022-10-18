import { useForm } from '../../../hooks/useForm';
import { Form } from 'react-bootstrap';
import { HomeNav } from '../../ui/HomeNav';
import { useNavigate} from 'react-router-dom';
import { useClaseStore } from '../../../hooks/useClaseStore';
import { useEffect } from 'react';
import { useAlumnoStore } from '../../../hooks/useAlumnoStore';


export const DataAlumnosActualizar = () => {

    const navigate = useNavigate();

    const { startSavingAlumno, activeAlumno } = useAlumnoStore();
    const { name, lastname, email, cellphone, address, claseadd, id, onInputChange }  = useForm( activeAlumno );  
    const { clases, startLoadingClases } = useClaseStore();


    useEffect(() => {
        startLoadingClases();
      }, [])

    const claseSubmit = ( event ) => {
        event.preventDefault();
        

        startSavingAlumno( { name: name, lastname: lastname, email:email, cellphone: cellphone, address: address, claseadd: claseadd, id: id, date: new Date() })

        navigate("/data/alumnos");
    }


  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Actualizar Alumno</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form' onSubmit={ claseSubmit }>
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
                    Actualizar
                </button>
            </Form>
         </div>
    </>
  )
}