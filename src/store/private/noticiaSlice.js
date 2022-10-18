import { createSlice } from '@reduxjs/toolkit';

export const noticiaSlice = createSlice({
    name: 'noticia',
    initialState: {
        isLoadingNoticias: true,
        noticias: [
            // tempAlumno
        ],
        activeNoticia: null
    },
    reducers: {
        onSetActiveNoticia: (state,{payload}) => {
            state.activeNoticia = payload;
        },
        onAddNewNoticia: (state,{payload}) => {
            state.noticias.push(payload);
            state.activeNoticia = null;
        },
        onUpdateNoticia: (state,{payload}) => {
            state.noticias = state.noticias.map( noticia => {
                if ( noticia.id === payload.id ){
                    return payload;
                }

                return noticia;
            });
        },
        onDeleteNoticia: (state) => {
            if(state.activeNoticia){
                state.noticias = state.noticias.filter( noticia => noticia.id !== state.activeNoticia.id);
                state.activeNoticia = null;
            }
        },
        onLoadNoticias: (state,{ payload = [] }) => {
            state.isLoadingNoticias = false;
            //state.evemts = payload;
            payload.forEach( noticia => {
                const exist = state.noticias.some( dbNoticia => dbNoticia.id === noticia.id );
                if ( !exist ){
                    state.noticias.push( noticia )
                }
            })

        },
        onLogoutNoticia: ( state ) => {
            state.isLoadingNoticias= true;
            state.noticias= [];
            state.activeNoticia= null
        }   
        
    }
});


export const { 
    onAddNewNoticia,
    onDeleteNoticia, 
    onLoadNoticias, 
    onLogoutNoticia,
    onSetActiveNoticia, 
    onUpdateNoticia,
} = noticiaSlice.actions;