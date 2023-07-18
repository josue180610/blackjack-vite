import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { imprimirCarta } from "./imprimir-carta";


/**
 * Método que permite a la computadora obtener las cartas necesarias para ganar o perder.
 * @param {HTMLElement} divCartas - Mesa del jugador.
 * @param {HTMLElement} puntosHTML - Tipo de argumento por referencia.
 * @param {array<string>} deck - Baraja disponible de cartas.
 * @param {Number} puntosMinimos - Puntaje mínimo que debe de superar la maquina.
 */
export const turnoComputadora = ( divCartas,puntosHTML,deck,puntosMinimos ) => {

    if(!puntosMinimos){
        throw new Error("Puntos mínimos son necesarios.");
    }

    if(!puntosHTML){
        throw new Error("Argumento puntosHTML es necesario.")
    }
    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        divCartas.append(imprimirCarta(carta));
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}