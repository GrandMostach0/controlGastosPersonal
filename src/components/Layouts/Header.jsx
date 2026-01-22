import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header(){

    const listaOpciones = [
        {nombre: 'Gastos', enlace: '/gastos'},
        {nombre: 'Ahorro', enlace: '/ahorro'},
        {nombre: 'Prestamos', enlace: '/prestamos'},
        {nombre: 'Ajustes', enlace: '/ajustes'},
    ]

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(listaOpciones[0]);

    return(
        <section className="px-2">
            <h1 className="text-2xl font-bold">Mis gastos</h1>
            <p>Control de gastos personales</p>
            <br />
            <nav>
                <ul className="flex space-x-4">
                    {listaOpciones.map((opcion) => (
                        <li key={opcion.nombre} 
                            className={`px-2 py-2 text-red-500 text-base`}
                            onClick={() => setOpcionSeleccionada(opcion)}
                            >
                            <Link to={opcion.enlace}>
                                {opcion.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </section>
    )
}