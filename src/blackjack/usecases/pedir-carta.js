
/**
 * Método que permite pedir una nueva carta desde la baraja.
 * @param {array<string>} deck - Ejm: ['3D','2D','5D'...]
 * @returns {string} - Devuelve una carta de la baraja - Ejm : 4D
 */
export const pedirCarta = ( deck ) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}