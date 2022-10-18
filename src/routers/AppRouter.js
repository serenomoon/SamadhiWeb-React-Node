import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

import { Clases, ClasesMas, Contacto, DataAlumnos, DataAlumnosActualizar, DataAlumnosAdd, DataAlumnosVer, DataClases, DataClasesActualizar, DataClasesAdd, DataClasesVer, DataFacilitadores, DataFacilitadoresActualizar, DataFacilitadoresAdd, DataFacilitadoresVer, DataNoticias, DataNoticiasActualizar, DataNoticiasAdd, DataNoticiasVer, Facilitador, Facilitadores, Home, LoginScreen, Noticias } from '../components'
import { About } from "../components/home/About";


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

    // const authStatus = 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    },[])
    

    if ( status === 'checking'){
        return (
            <h3>Cargando...</h3>
        )
    }


  return (
      <Routes>

        {
          (status === 'not-authenticated')
          ?(
            <>

              <Route path="/" element={<Home />} />
              <Route path="facilitadores" element={<Facilitadores />} />
              <Route path="facilitador/:id" element={<Facilitador />} />
              <Route path="clases" element={<Clases />} />
              <Route path="clase/:id" element={<ClasesMas />} />
              <Route path="noticias/:id" element={<Noticias />} />
              <Route path="contacto" element={<Contacto />} />
      
              <Route path="auth/login" element={ <LoginScreen /> } />

            </>
          )
          :(
            <>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="clases" element={<Clases />} />
              <Route path="facilitadores" element={<Facilitadores />} />
              <Route path="facilitador/:id" element={<Facilitador />} />
              <Route path="clases" element={<Clases />} />
              <Route path="clase/:id" element={<ClasesMas />} />
              <Route path="noticias/:id" element={<Noticias />} />
              <Route path="contacto" element={<Contacto />} />

              {/* Rutas Privadas */}
              <Route path="data/alumnos" element={<DataAlumnos />} />
              <Route path="data/alumnos-add" element={<DataAlumnosAdd />} />
              <Route path="data/alumnos-ver/:id" element={<DataAlumnosVer />} />
              <Route path="data/alumnos-actualizar/:id" element={<DataAlumnosActualizar />} />

              <Route path="data/clases" element={<DataClases />} />
              <Route path="data/clases-add" element={<DataClasesAdd />} />
              <Route path="data/clases-ver/:id" element={<DataClasesVer />} />
              <Route path="data/clases-actualizar/:id" element={<DataClasesActualizar />} />

              <Route path="data/facilitadores" element={<DataFacilitadores />} />
              <Route path="data/facilitadores-add" element={<DataFacilitadoresAdd />} />
              <Route path="data/facilitadores-ver/:id" element={<DataFacilitadoresVer />} />
              <Route path="data/facilitadores-actualizar/:id" element={<DataFacilitadoresActualizar />} />

              <Route path="data/noticias" element={<DataNoticias />} />
              <Route path="data/noticias-add" element={<DataNoticiasAdd />} />
              <Route path="data/noticias-ver/:id" element={<DataNoticiasVer />} />
              <Route path="data/noticias-actualizar/:id" element={<DataNoticiasActualizar />} />
            </>

          )
        }

        <Route path="/*" element={ <Navigate to='/' /> } />


      </Routes>
  )
}

