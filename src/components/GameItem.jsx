import React from 'react'

export const GameItem = () => {
    return (
        <tr>
            <th>Nombre ejemplo</th>
            <th>Rating ejemplo</th>
            <th>Fecha ejemplo</th>
            <th>Categoría ejemplo</th>
            <th>Duración ejemplo</th>
            <th>Si esta en venta ejemplo</th>
            <th>
                <div className="d-flex gap-3">
                    <span role='button' className='badge bg-success'>
                        Editar
                    </span>
                    <span role='button' className='badge bg-danger'>
                        Eliminar
                    </span>
                </div>
            </th>
        </tr>
    )
}