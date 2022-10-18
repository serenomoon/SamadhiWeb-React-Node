import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempAlumno = {
//     _id: new Date().getTime(),
//     title: 'Cumpleaños Samus',
//     notes: 'Hay que festejar',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#fafafa',
//     user: {
//       _id: '123',
//       name: 'Saulo'
//     }
  
//   };

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
        isLoadingAlumnos: true,
        alumnos: [
            // tempAlumno
        ],
        activeAlumno: null
    },
    reducers: {
        onSetActiveAlumno: (state,{payload}) => {
            state.activeAlumno = payload;
        },
        onAddNewAlumno: (state,{payload}) => {
            state.alumnos.push(payload);
            state.activeAlumno = null;
        },
        onUpdateAlumno: (state,{payload}) => {
            state.alumnos = state.alumnos.map( alumno => {
                if ( alumno.id === payload.id ){
                    return payload;
                }

                return alumno;
            });
        },
        onDeleteAlumno: (state) => {
            if(state.activeAlumno){
                state.alumnos = state.alumnos.filter( alumno => alumno.id !== state.activeAlumno.id);
                state.activeAlumno = null;
            }
        },
        onLoadAlumnos: (state,{ payload = [] }) => {
            state.isLoadingAlumnos = false;
            //state.evemts = payload;
            payload.forEach( alumno => {
                const exist = state.alumnos.some( dbAlumno => dbAlumno.id === alumno.id );
                if ( !exist ){
                    state.alumnos.push( alumno )
                }
            })

        },
        onLogoutAlumno: ( state ) => {
            state.isLoadingAlumnos= true;
            state.alumnos= [];
            state.activeAlumno= null
        }   
        
    }
});


export const { 
    onAddNewAlumno,
    onDeleteAlumno, 
    onLoadAlumnos, 
    onLogoutAlumno,
    onSetActiveAlumno, 
    onUpdateAlumno,
} = alumnoSlice.actions;