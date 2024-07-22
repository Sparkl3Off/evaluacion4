import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const GameForm = () => {
    const navigate = useNavigate();
    const {inputValores, handleInputChange, resetForm} = useForm({
        nombre: '',
        rating: '',
        fecha_lanzamiento: '',
        categoria: '',
        duracion: '',
        venta: ''
    })

    const handleEnviar = (e) => {
        e.preventDefault();
        console.log(inputValores);
        resetForm();
    }
    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button className='btn btn-outline-secondary' onClick={() => navigate("/")}>Atrás</button>
                <h1>Añadir Juego</h1>
            </div>
            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleEnviar}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="nombre">Nombre</label>
                        <input
                        id="nombre"
                        name="nombre"
                        value={inputValores.nombre}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del juego"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="rating">Rating</label>
                        <input
                        id="rating"
                        name="rating"
                        value={inputValores.rating}
                        onChange={handleInputChange}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el rating del juego" 
                        min={0}
                        max={5}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="fecha_nacimiento">Fecha de Lanzamiento</label>
                        <input
                        id="fecha_lanzamiento"
                        name="fecha_lanzamiento"
                        value={inputValores.fecha_lanzamiento}
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        placeholder="Ingrese la fecha de lanzamiento del juego"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="categoria">Categoría</label>
                        <input
                        id="categoria"
                        name="categoria"
                        value={inputValores.categoria}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la categoría del juego"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="duracion">Duración</label>
                        <input
                        id="duracion"
                        name="duracion"
                        value={inputValores.duracion}
                        onChange={handleInputChange}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese la categoría del juego"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="duracion">¿Esta en venta?</label>
                        <div className="form-check">
                            <input
                            id="opcion1"
                            name="seVende"
                            value={inputValores.opcion1}
                            onChange={handleInputChange}
                            className="form-check-input"
                            type="radio"
                            />
                            <label className="form-check-label" htmlFor="opcion1">Si esta en venta</label>
                        </div>
                        <div className="form-check">
                            <input
                            id="opcion2"
                            name="seVende"
                            value={inputValores.opcion1}
                            onChange={handleInputChange}
                            className="form-check-input"
                            type="radio"
                            />
                            <label className="form-check-label" htmlFor="opcion2">No esta en venta</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-outline-light">Añadir Juego</button>
                    </div>
                </form>
            </div>
        </div>
    );
}