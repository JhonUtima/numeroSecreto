// JS FILE


let numRandom = 0
let intentos = 1;

function modificarElemento (elemento, texto){
	let modi = document.querySelector(elemento);
	modi.innerHTML = (texto);

}

function agregarAtributo(id, atr, valor){
	document.querySelector(id).setAttribute(atr,valor);
}

function numeroRandom(){
	return Math.floor(Math.random()*10)+1;
}

let historial = [];


numRandom = numeroRandom();
// modificarElemento ('h1','Hola mundo');

/////////////////////////////////////// FUNCION >BOTON LANZAR< //////////////////////////////////////////////////
function numeroUsuario (){
	let numUsu = document.getElementById('numUsuario').value;

	if (numUsu == numRandom) {
		modificarElemento('h1',`<strong>Muy bien!</strong> acertaste el numero <strong>${numUsu}</strong> en <strong>${intentos}</strong> ${(intentos == 1)? 'intento' : 'intentos'}`);
		document.querySelector('#botonReiniciar').removeAttribute('disabled');
		agregarAtributo('#botonReiniciar', 'style', 'background-color:#86b8a5');


///////// PUSHEAMOS LOS NUMEROS ACERTADOS AL HISTORIAL ///////////////////////////////////////77

		historial.push(numUsu);
		historial.forEach((ele)=>{
			modificarElemento('ul',`<li>${ele}</li>`);
		});
		document
		console.log(historial);
		// document.querySelector('#botonReiniciar').setAttribute('style','background-color:#86b8a5');
	}
	else {
		if (numUsu > numRandom) {
			modificarElemento('h1',`El numero secreto es <strong>MENOR</strong>`);
			// agregarAtributo('strong','style','color:green');
		}
		else {
			modificarElemento('h1',`El numero secreto es <strong>MAYOR</strong>`);
		}
		
		limpiarNumero();
		intentos++;
	}
}

////////////////// FUNCION PARA COLOCAR EL VALUE DEL INPUT EN BLANCO //////////////////////////

function limpiarNumero(){
	document.querySelector('#numUsuario').value = '';
}

///// FUNCION PARA EL BOTON >REINICIAR JUEGO< COLOCAMOS EL h1 COMO INICIA, LIMPIAMOS LA CAJA, INVOCAMOS numeroRandom() PARA NUEVO NUMERO
///// RANDOM Y REINICIAMOS EL CONTADOR, Y VOLVEMOS A USAR EL BOTON >LANZAR< QUE HARA TODO DE LA FUNCION numeroUsuario().

function reiniciarJuego(){
	agregarAtributo('#botonReiniciar','disabled','true');
	agregarAtributo('#botonReiniciar','style','background-color:grey');
	modificarElemento('h1',`JUEGO DEL NUMERO SECRETO`);
	limpiarNumero();
	numRandom = numeroRandom();
	console.log(numRandom);
	intentos = 1;
}
