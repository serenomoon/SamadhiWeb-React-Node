import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { samadhiApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewAlumno, onDeleteAlumno, onLoadAlumnos, onSetActiveAlumno, onUpdateAlumno } from '../store';

export const useAlumnoStore = () => {
  
    const dispatch = useDispatch();

    const { alumnos, activeAlumno } = useSelector( state => state.alumnos );
    const { user } = useSelector( state => state.auth );

    const setActiveAlumno = ( alumnoEvent ) => {
        dispatch( onSetActiveAlumno( alumnoEvent ) );
    }

    const startSavingAlumno = async( alumnoEvent ) => {

        try {
            
            if( alumnoEvent.id ) {
                //Actualizando
                await samadhiApi.put(`/alumnos/${alumnoEvent.id}`, alumnoEvent)
                dispatch( onUpdateAlumno({ ...alumnoEvent, user }))
                return;
            }
            //Creando
            const { data } = await samadhiApi.post('/alumnos', alumnoEvent)
            dispatch( onAddNewAlumno({ ...alumnoEvent, id: data.alumno.id, user }))


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg,'error');
        }
        
        
        
    }


    const startDeletingAlumno = async( alumno ) => {

        try {
            
            //Eliminando
            await samadhiApi.delete(`/alumnos/${alumno.id}`)
            dispatch( onDeleteAlumno() );
            

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg,'error');
        }

        
    }


    const startLoadingAlumno = async() => {

        try {

            const { data } = await samadhiApi.get('/alumnos');
            const alumnos = convertEventsToDateEvents( data.alumnos );
            dispatch( onLoadAlumnos( alumnos ) );
            
        } catch (error) {
            console.log('Error cargando alumnos');
            console.log(error)
        }

    }

    return {
        //*Propiedades
        activeAlumno,
        alumnos,
        hasEventSelected: !!activeAlumno,

        //*Metodos
        setActiveAlumno,
        startDeletingAlumno,
        startLoadingAlumno,
        startSavingAlumno
    }

}