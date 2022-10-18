import React from 'react'

export const Foot = () => {
  return (
    <>
        <footer className="foot__footer text-center text-white">

            <div className="container p-4 pb-0">

                <div className="mb-4">

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>

                </div>

            </div>

            <div className='foot__datos'>
              <ul>
                <li>
                  <h5>
                    Samadhi Studio
                  </h5>
                </li>
                <li>Tienda holística</li>
                <li>Clases de yoga</li>
                <li>Masajes</li>
                <li>Astrologia</li>
                <li>Tarot</li>
              </ul>

              <ul>
                <li>
                  <h5>
                    Contacto
                  </h5>
                </li>
                <li>Showroom en Punta Alta</li>
                <li>+54 9 2932 440-534</li>
                <li>samadhi@gmail.com</li>
              </ul>

              <ul>
                <li>
                  <h5>
                    Horario de atención
                  </h5>
                </li>
                <li>Lunes a viernes de 10 hs a 19 hs.</li>
              </ul>

             
            </div>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              © 2022 Copyright: Julieta Fernandez
            </div>
   
        </footer>
    </>
  )
}
