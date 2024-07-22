import React, { useEffect, useState } from 'react';
import { GameItem } from './GameItem';
import { getListGame } from '../services/localStorage';

export const GameList = () => {
    const [juegos, setJuegos] = useState([]);
    
    useEffect(() => {
        setJuegos(getListGame())
    }, [])
    return (
        <div>
            <h1 className='my-5 text-center'>Gestionar Juegos</h1>

            {
                juegos.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <div className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Rating</th>
                                    <th>Fecha de Lanzamiento</th>
                                    <th>Categoría</th>
                                    <th>Duración (Horas)</th>
                                    <th>¿Esta en venta?</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GameItem/>
                            </tbody>
                        </div>
                    </div>
                ): (
                    <h3 className = "text-center">No hay juegos</h3>
                )
            }
        </div>
    )
}
