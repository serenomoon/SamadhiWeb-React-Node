import { createSlice } from '@reduxjs/toolkit';

export const facilitadorSlice = createSlice({
    name: 'facilitador',
    initialState: {
        isLoadingFacilitadores: true,
        facilitadores: [
            // tempAlumno
        ],
        activeFacilitador: null
    },
    reducers: {
        onSetActiveFacilitador: (state,{payload}) => {
            state.activeFacilitador = payload;
        },
        onAddNewFacilitador: (state,{payload}) => {
            state.facilitadores.push(payload);
            state.activeFacilitador = null;
        },
        onUpdateFacilitador: (state,{payload}) => {
            state.facilitadores = state.facilitadores.map( facilitador => {
                if ( facilitador.id === payload.id ){
                    return payload;
                }

                return facilitador;
            });
        },
        onDeleteFacilitador: (state) => {
            if(state.activeFacilitador){
                state.facilitadores = state.facilitadores.filter( facilitador => facilitador.id !== state.activeFacilitador.id);
                state.activeFacilitador = null;
            }
        },
        onLoadFacilitadores: (state,{ payload = [] }) => {
            state.isLoadingFacilitadores = false;
            //state.evemts = payload;
            payload.forEach( facilitador => {
                const exist = state.facilitadores.some( dbFacilitador => dbFacilitador.id === facilitador.id );
                if ( !exist ){
                    state.facilitadores.push( facilitador )
                }
            })

        },
        onLogoutFacilitador: ( state ) => {
            state.isLoadingFacilitadores= true;
            state.facilitadores= [];
            state.activeFacilitador= null
        }   
        
    }
});


export const { 
    onAddNewFacilitador,
    onDeleteFacilitador, 
    onLoadFacilitadores, 
    onLogoutFacilitador,
    onSetActiveFacilitador, 
    onUpdateFacilitador,
} = facilitadorSlice.actions;