import { configureStore } from "@reduxjs/toolkit";
import { authSlice, claseSlice, alumnoSlice, facilitadorSlice, noticiaSlice } from "./";

export const store = configureStore({
    reducer: {
        auth:           authSlice.reducer,
        clases:         claseSlice.reducer,
        alumnos:        alumnoSlice.reducer,
        facilitadores:  facilitadorSlice.reducer,
        noticias:       noticiaSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});