

/**
 * Método que permite imprimir una carta en el campo del jugador
 * @param {string} carta 
 * @returns {HTMLImageElement}
 */
export const imprimirCarta=(carta)=>{
    if(!carta){
        throw new Error("La carta es un elemento obligatorio.");
    }
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}