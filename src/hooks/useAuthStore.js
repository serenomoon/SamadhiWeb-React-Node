import { useDispatch, useSelector } from "react-redux";
import { samadhiApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );

        try {
            
            const { data } = await samadhiApi.post('/auth',{ email, password });
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            },10);
        }
    }

    const startRegister = async({ name, email, password, secretkey }) => {
        dispatch( onChecking() );

        try {
            
            const { data } = await samadhiApi.post('/auth/new',{ name, email, password, secretkey });
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            },10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        // console.log(token)
        if ( !token ){ return dispatch( onLogout() ) };

        try {
            
            const { data } = await samadhiApi.get('/auth/renew');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //*Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,

    }
}