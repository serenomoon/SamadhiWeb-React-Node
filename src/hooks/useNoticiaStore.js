import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { samadhiApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewNoticia, onDeleteNoticia,  onLoadNoticias, onLogoutNoticia, onSetActiveNoticia, onUpdateNoticia } from '../store';

export const useNoticiaStore = () => {
  
    const dispatch = useDispatch();

    const { noticias, activeNoticia } = useSelector( state => state.noticias );
    const { user } = useSelector( state => state.auth );

    const setActiveNoticia  = ( noticiaEvent ) => {
        dispatch( onSetActiveNoticia ( noticiaEvent ) );
    }

    const startSavingNoticia  = async( noticiaEvent ) => {

        try {
            
            if( noticiaEvent.id ) {
                //Actualizando
                await samadhiApi.put(`/noticias/${noticiaEvent.id}`, noticiaEvent)
                dispatch( onUpdateNoticia({ ...noticiaEvent, user }))
                return;
            }
            //Creando
            const { data } = await samadhiApi.post('/noticias', noticiaEvent)
            dispatch( onAddNewNoticia({ ...noticiaEvent, id: data.noticia.id, user }))


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg,'error');
        }
        
        
        
    }


    const startDeletingNoticia = async(noticia) => {

        try {
            
            //Eliminando
            await samadhiApi.delete(`/noticias/${noticia.id}`)
            dispatch( onDeleteNoticia() );
            

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg,'error');
        }

        
    }


    const startLoadingNoticias = async() => {

        try {

            const { data } = await samadhiApi.get('/noticias');
            const noticias = convertEventsToDateEvents( data.noticias );
            dispatch( onLoadNoticias( noticias ) );
            
        } catch (error) {
            console.log('Error cargando noticias');
            console.log(error)
        }

    }


    return {
        //*Propiedades
        activeNoticia,
        noticias,
        hasEventSelected: !!activeNoticia,

        //*Metodos
        setActiveNoticia,
        startDeletingNoticia,
        startLoadingNoticias,
        startSavingNoticia
    }

}