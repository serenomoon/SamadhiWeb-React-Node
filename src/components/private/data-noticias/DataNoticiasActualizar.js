import { useForm } from '../../../hooks/useForm';
import { Form } from 'react-bootstrap';
import { HomeNav } from '../../ui/HomeNav';
import { useNavigate} from 'react-router-dom';
import { useNoticiaStore } from '../../../hooks/useNoticiaStore';


export const DataNoticiasActualizar = () => {

    const navigate = useNavigate();

    const { startSavingNoticia, activeNoticia } = useNoticiaStore();
    const { title, message, uploadimg, id, onInputChange }  = useForm( activeNoticia );
    


    const noticiaSubmit = ( event ) => {
        event.preventDefault();
        

        startSavingNoticia( { title: title, message: message, uploadimg: uploadimg, id: id, date: new Date() })

        navigate("/data/noticias");
    }

  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Actualizar Clase</h1>
                <hr className='clases__hr'></hr>
            </div>
            

            <Form className='contacto__form' onSubmit={ noticiaSubmit }>
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

                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Selecciona una imagen</Form.Label>
                    <Form.Control
                        type="file"
                        name='uploadimg'
                        // onChange={(e)=>setUploadimg(e.target.files[0])}
                    />
                </Form.Group> */}

                <button className='btn btn-green mt-4' type="submit">
                    Actualizar
                </button>
            </Form>
         </div>
    </>
  )
// }
}

