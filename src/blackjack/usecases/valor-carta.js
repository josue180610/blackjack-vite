
/**
 * Método que permite obtener el valor numerico de una carta
 * @param {string} carta - Ejemplo : 5D
 * @returns {Number} - Ejemplo : 5
 */
export const valorCarta = ( carta ) => {
    if(carta === "" || !carta){
        throw new Error("Se necesita pasar una carta para seguir con el juego.")
    }
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}