import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { samadhiApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewFacilitador, onDeleteFacilitador, onLoadFacilitadores, onLogoutFacilitador, onSetActiveFacilitador,  onUpdateFacilitador } from '../store';

export const useFacilitadorStore = () => {
  
    const dispatch = useDispatch();

    const { facilitadores, activeFacilitador } = useSelector( state => state.facilitadores );
    const { user } = useSelector( state => state.auth );

    const setActiveFacilitador = ( facilitadorEvent ) => {
        dispatch( onSetActiveFacilitador( facilitadorEvent ) );
    }

    const startSavingFacilitador = async( facilitadorEvent ) => {

        try {
            
            if( facilitadorEvent.id ) {
                //Actualizando
                await samadhiApi.put(`/facilitadores/${facilitadorEvent.id}`, facilitadorEvent)
                dispatch( onUpdateFacilitador({ ...facilitadorEvent, user }))
                return;
            }
            //Creando
            const { data } = await samadhiApi.post('/facilitadores', facilitadorEvent)
            dispatch( onAddNewFacilitador({ ...facilitadorEvent, id: data.facilitador.id, user }))


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg,'error');
        }
        
        
        
    }


    const startDeletingFacilitador = async(facilitador) => {

        try {
            
            //Eliminando
            await samadhiApi.delete(`/facilitadores/${facilitador.id}`)
            dispatch( onDeleteFacilitador() );
            

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg,'error');
        }

        
    }


    const startLoadingFacilitadores = async() => {

        try {

            const { data } = await samadhiApi.get('/facilitadores');
            const facilitadores = convertEventsToDateEvents( data.facilitadores );
            dispatch( onLoadFacilitadores( facilitadores ) );
            
        } catch (error) {
            console.log('Error cargando facilitadores');
            console.log(error)
        }

    }


    return {
        //*Propiedades
        activeFacilitador,
        facilitadores,
        hasEventSelected: !!activeFacilitador,

        //*Metodos
        setActiveFacilitador,
        startDeletingFacilitador,
        startLoadingFacilitadores,
        startSavingFacilitador
    }

}