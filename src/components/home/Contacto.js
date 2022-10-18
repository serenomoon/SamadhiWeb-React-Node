import React from 'react'
import { yogaImages } from '../../helpers/yogaImages'
import { HomeNav } from '../ui/HomeNav'
import { Foot } from './Foot'
import { Form } from 'react-bootstrap';

export const Contacto = () => {
  return (
    <>
      <HomeNav />

      <div className='contacto__contacto'>
        <img src={ yogaImages(`./fondo-home.jpg`) } className="contacto__background img-fluid" alt='fondo'/>
        <ul>
            <li>
              <h5>
                Contacto
              </h5>
            </li>
            <li>Showroom en Punta Alta</li>
            <li>+54 9 2932 440-534</li>
            <li>samadhi@gmail.com</li>
        </ul>
      </div>

        <Form className='contacto__form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Teléfono" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
          </Form.Group>

          <button className='btn btn-green' type="submit">
            Enviar
          </button>
        </Form>



      <Foot />
    </>
  )
}
