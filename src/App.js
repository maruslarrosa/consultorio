import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'

function App() {

  // Listado de Citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
    console.log(citas);
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
