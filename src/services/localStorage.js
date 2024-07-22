import { json } from "react-router-dom";

export const getListGame = () => {
    if (!localStorage["@juegos"]){
        localStorage["@juegos"] = JSON.stringify([]);
    }

    let juegos = JSON.parse(localStorage["@juegos"]);
    return juegos
}
export const agregarJuego = (juego) => {
    const juegos = getListGame();
    juegos.push(juego);
    localStorage["@juegos"] = JSON.stringify(juegos)
}