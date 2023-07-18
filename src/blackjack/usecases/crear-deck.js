import _ from 'underscore'
/**
 * Método que permite crear la baraja de cartas para comenzar el juego
 * @param {array<string>} tiposDeCarta - Ejemplo: ['C','D','H','S']; 
 * @param {array<string>} tiposEspeciales - Ejemplo: ['A','J','Q','K'];
 * @returns {array<string>} returno un nuevo deck
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    let deck=[]

    if(!tiposDeCarta || tiposDeCarta.length ===0){
        throw new Error("tiposDeCarta es obligatorio como un arreglo de string.");
    }
    if(!tiposEspeciales || tiposEspeciales.length ===0){
        throw new Error("tiposEspeciales es obligatorio como un arreglo de string.");
    }

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;