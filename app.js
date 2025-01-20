let numeroSecreto = 0;
let numeroIntento = 1;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntento} ${(numeroIntento === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numeroIntento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecrerto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los numeros?
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los elementos posibles');
    }else{
        //Si el numero generado esta incluido en la listA
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecrerto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecrerto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de Intentos
    condicionesIniciales();
    //Desahabilitar el Boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
