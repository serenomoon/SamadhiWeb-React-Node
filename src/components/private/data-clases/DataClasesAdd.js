import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm';
import { HomeNav } from '../../ui/HomeNav'
import { useNavigate } from 'react-router-dom';
import { useClaseStore } from '../../../hooks/useClaseStore';
import { fileUpload } from '../../../helpers/fileUpload';

const claseFormField = {
        title: '',
        message: '',
        uploadimg: '',
        date: '',
        user: {
            _id: '',
            name: ''
        }
}

export const DataClasesAdd = () => {

    const { title, message, onInputChange }  = useForm( claseFormField );
    
    const { startSavingClase } = useClaseStore();

    const [files, setFiles] = useState([])

    const navigate = useNavigate();


    const onFileInputChange = async({ target }) => {
        if (target.files === 0) return

        setFiles(target.files)
        
    }


    const claseSubmit = async( event ) => {
        event.preventDefault();


        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        startSavingClase( { title: title, message: message, uploadimg: photosUrls[0], date: new Date().toString() })

        navigate("/data/clases");
    }


    return (
        <>
            <HomeNav />
            <div className='container mb-5'>
                <div className='clases__text mt-5'>
                    <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                    <h1 className='clases__h1'>Nueva Clase</h1>
                    <hr className='clases__hr'></hr>
                </div>


                <Form className='contacto__form' onSubmit={ claseSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            placeholder="Titulo"
                            name='title'
                            autoComplete='off' 
                            value={ title }
                            onChange={ onInputChange }
                         />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Mensaje"
                            name='message'
                            autoComplete='off' 
                            value={ message }
                            onChange={ onInputChange }
                        />
                    </Form.Group>

                    <input 
                        type="file"
                        onChange={ onFileInputChange }
                    />
                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Selecciona una imagen</Form.Label>
                        <Form.Control
                            type="file"
                            name='uploadimg'
                            // onChange={(e)=>setUploadimg(e.target.files[0])}
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
