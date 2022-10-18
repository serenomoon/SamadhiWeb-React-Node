import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAlumnoStore } from '../../../hooks/useAlumnoStore'

export const DataAlumnosList = ({trashoption, name, lastname, alum }) => {

  const { setActiveAlumno, startDeletingAlumno } = useAlumnoStore();

  const onSelect = (alumno) => {
    setActiveAlumno(alumno)
  }

  const onDelete = ( alumno ) => {
    startDeletingAlumno( alumno );
    window.location.reload(false);
  }

  return (
    <>
        <Container className='mt-1'>
            
            <Row>
                <Col md={4}>{name} {lastname}</Col>
                <Col className='dataalumnos__col' md={{ span: 4, offset: 4 }}>
                    <Link to={`/data/alumnos-ver/${name}-${lastname}`}>
                        <button className='btn btn-green' onClick={ () => onSelect(alum) }>VER</button>
                    </Link>

                    {trashoption === true 
                        ?
                          <button className='btn btn-red' onClick={ () => onDelete(alum) }><i data-fa-symbol="delete" className="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                    }
                </Col>
            </Row>    
  
        </Container>
    </>
  )
}
