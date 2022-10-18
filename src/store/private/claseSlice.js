import { createSlice } from '@reduxjs/toolkit';

export const claseSlice = createSlice({
    name: 'clase',
    initialState: {
        isLoadingClases: true,
        clases: [
            // tempAlumno
        ],
        activeClase: null
    },
    reducers: {
        onSetActiveClase: (state,{payload}) => {
            state.activeClase = payload;
        },
        onAddNewClase: (state,{payload}) => {
            state.clases.push(payload);
            state.activeClase = null;
        },
        onUpdateClase: (state,{payload}) => {
            state.clases = state.clases.map( clase => {
                if ( clase.id === payload.id ){
                    return payload;
                }

                return clase;
            });
        },
        onDeleteClase: (state) => {
            if(state.activeClase){
                state.clases = state.clases.filter( clase => clase.id !== state.activeClase.id);
                state.activeClase = null;
            }
        },
        onLoadClases: (state,{ payload = [] }) => {
            state.isLoadingClases = false;
            //state.evemts = payload;
            payload.forEach( clase => {
                const exist = state.clases.some( dbClase => dbClase.id === clase.id );
                if ( !exist ){
                    state.clases.push( clase )
                }
            })

        },
        onLogoutClase: ( state ) => {
            state.isLoadingClases= true;
            state.clases= [];
            state.activeClase= null
        }   
        
    }
});


export const { 
    onAddNewClase,
    onDeleteClase, 
    onLoadClases, 
    onLogoutClase,
    onSetActiveClase, 
    onUpdateClase,
} = claseSlice.actions;