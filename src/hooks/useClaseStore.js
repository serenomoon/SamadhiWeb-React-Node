import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { samadhiApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewClase, onDeleteClase,  onLoadClases,  onLogoutClase, onSetActiveClase,  onUpdateClase, } from '../store';

export const useClaseStore = () => {
  
    const dispatch = useDispatch();

    const { clases, activeClase } = useSelector( state => state.clases );
    const { user } = useSelector( state => state.auth );

    const setActiveClase = ( claseEvent ) => {
        dispatch( onSetActiveClase( claseEvent ) );
    }

    const startSavingClase = async( claseEvent ) => {

        try {
            
            if( claseEvent.id ) {
                //Actualizando
                await samadhiApi.put(`/clases/${claseEvent.id}`, claseEvent)
                dispatch( onUpdateClase({ ...claseEvent, user }))
                return;
            }
            //Creando
            const { data } = await samadhiApi.post('/clases', claseEvent)
            dispatch( onAddNewClase({ ...claseEvent, id: data.clase.id, user }))


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg,'error');
        }
        
        
        
    }


    const startDeletingClase = async(clase) => {

        try {
            
            //Eliminando
            await samadhiApi.delete(`/clases/${clase.id}`)
            dispatch( onDeleteClase() );
            

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg,'error');
        }

        
    }


    const startLoadingClases = async() => {

        try {

            const { data } = await samadhiApi.get('/clases');
            const clases = convertEventsToDateEvents( data.clases );
            dispatch( onLoadClases( clases ) );
            
        } catch (error) {
            console.log('Error cargando clases');
            console.log(error)
        }

    }


    return {
        //*Propiedades
        activeClase,
        clases,
        hasEventSelected: !!activeClase,

        //*Metodos
        setActiveClase,
        startDeletingClase,
        startLoadingClases,
        startSavingClase
    }

}