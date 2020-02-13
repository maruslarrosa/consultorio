import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) => {

    // crear state de form
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // crear state de error
    const [error, actualizarError] = useState(false);

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // funcion que ejecuta los cambios del usuario
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // funcion que envia cita
    const submitCita = e => {
        e.preventDefault();
        if (mascota.trim() === ""
            || propietario.trim() === ""
            || fecha.trim() === ""
            || hora.trim() === ""
            || sintomas.trim() === "") {
            actualizarError(true);
            return;
        }

        actualizarError(false);
        cita.id = uuid();
        crearCita(cita);
        //El form se reinicia porque tengo bindeadas las variables de cita al form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Nombre Mascota</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntoma</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;