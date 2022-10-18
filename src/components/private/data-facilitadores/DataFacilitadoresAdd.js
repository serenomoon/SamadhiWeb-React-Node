import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { fileUpload } from '../../../helpers/fileUpload';
import { useClaseStore, useFacilitadorStore } from '../../../hooks';
import { useForm } from '../../../hooks/useForm';
import { HomeNav } from '../../ui/HomeNav'

const facilitadorFormField = {
    name: '',
    lastname: '',
    email: '',
    address: '',
    cellphone: '',
    bio: '',
    service: '',
    claseadd: '',
    activity: '',
    uploadimg: '',
    date: '',
    user: {
        _id: '',
        name: ''
    }
}


export const DataFacilitadoresAdd = () => {

    const {name, lastname, email, address, cellphone, bio, service, claseadd, activity, onInputChange }  = useForm( facilitadorFormField );
    const { clases, startLoadingClases } = useClaseStore();
    const { startSavingFacilitador } = useFacilitadorStore();

    const [files, setFiles] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        startLoadingClases();
      }, [])

    const onFileInputChange = async({ target }) => {
        if (target.files === 0) return

        setFiles(target.files)
        
    }


    const facilitadorSubmit = async( event ) => {
        event.preventDefault();


        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        startSavingFacilitador( { name: name, lastname: lastname, email: email, address: address, cellphone: cellphone, bio: bio, service: service, claseadd: claseadd, activity: activity, uploadimg: photosUrls[0], date: new Date().toString() })

        navigate("/data/facilitadores");
    }

  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nuevo Facilitador</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form' onSubmit={facilitadorSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        name='name'
                        autoComplete='off' 
                        value={name}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Apellido"
                        name='lastname'
                        autoComplete='off' 
                        value={lastname}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Dirección"
                        name='address'
                        autoComplete='off' 
                        value={address}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Teléfono"
                        name='cellphone'
                        autoComplete='off' 
                        value={cellphone}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Email"
                        name='email'
                        autoComplete='off' 
                        value={email}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Actividad"
                        name='activity'
                        autoComplete='off' 
                        value={activity}
                        onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Bio"
                        name='bio'
                        autoComplete='off' 
                        value={bio}
                        onChange={onInputChange} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Servicio"
                        name='service'
                        autoComplete='off' 
                        value={service}
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
                
                <input 
                        type="file"
                        onChange={ onFileInputChange }
                />
                {/* <Form.Group controlId="formFile" className="mb-3 mt-3">
                    <Form.Label>Selecciona una imagen</Form.Label>
                    <Form.Control
                        type="file"
                        name='uploadimgname'
                        // onChange={(e)=>setUploadimgname(e.target.files[0])}
                    />
                </Form.Group> */}

                <br/>
                <button className='btn btn-green mt-4' type="submit">
                    Añadir
                </button>
            </Form>
         </div>
    </>
  )
}