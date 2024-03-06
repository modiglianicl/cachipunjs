// Parametros juego
let nJuegos = parseInt(prompt("Cuantos cachipun quieres jugar? Ingresa un número")); // Cantidad de partidas
let jugadasPosibles = ['piedra','papel','tijera'];
// Puntajes
let scoreHumano = 0;
let scoreMaquina = 0;

// Juego
for (let i = 0 ; i < nJuegos ; i++) {
    // Jugada humano
    let rJugador = prompt("Que tiraras esta partida? (Piedra, papel o tijera)").toLowerCase();
    if ( jugadasPosibles.includes(rJugador) === false) {
        rJugador = prompt("Debe ser PIEDRA, PAPEL o TIJERA").toLowerCase(); // Re evaluamos solo una vez, solo podemos usar if por temario
    }
    console.log(`Tiraste ${rJugador}!`);

    // Jugada máquina
    let nMaquina = Math.floor(Math.random() * 3); // Numero al azar entre 0 y 2
    let rMaquina // Variable donde asignaremos el valor de la jugada

    // Asignando jugada de maquina
    if (nMaquina === 0) {
        rMaquina = 'piedra'
    } else if (nMaquina === 1) {
        rMaquina = 'papel'
    } else if (nMaquina === 2) {
        rMaquina = 'tijera'
    }
    console.log(`La maquina ha tirado ${rMaquina}!`)

    // Definiendo ganador
    document.write(`Partida n°${i+1} : `)
    if (rJugador === rMaquina) {
        console.log(`Empate! (Tú : ${rJugador} v/s Máquina : ${rMaquina})`);
        document.write(`Empate! (Tú : ${rJugador} v/s Máquina : ${rMaquina})<br>`);
    } else if ( (rJugador === 'piedra') && (rMaquina === 'papel') ) {
        console.log(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})`);
        document.write(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})<br>`);
        scoreMaquina += 1;
    } else if ( (rJugador === 'papel') && (rMaquina === 'tijera') ){
        console.log(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})`);
        document.write(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})<br>`);
        scoreMaquina += 1;
    } else if ( (rJugador === 'tijera') && (rMaquina === 'piedra') ){
        console.log(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})`);
        document.write(`Perdiste contra la máquina! (Tú : ${rJugador} v/s Máquina : ${rMaquina})<br>`);
        scoreMaquina += 1;
    } else {
        console.log(`Ganaste!, felicitaciones! (Tú : ${rJugador} v/s Máquina : ${rMaquina})`);
        document.write(`Ganaste!, felicitaciones! (Tú : ${rJugador} v/s Máquina : ${rMaquina})<br>`);
        scoreHumano +=1;
    }
}

document.write(`Puntajes finales para esta sesión:<br> Tú : ${scoreHumano} v/s Máquina : ${scoreMaquina}`)



