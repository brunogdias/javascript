//Disparando/chamando uma função internamente

function parimpar(n) { //parimpar(n) chama-se parâmetro
    if (n%2 == 0) {  
        return 'Par!'   
    } else {
        return 'Ímpar!'  // tudo dentro do bloco if e else chama-se: ação
    }
}

console.log(parimpar(223)) // todo esse termo chama-se: chamada 