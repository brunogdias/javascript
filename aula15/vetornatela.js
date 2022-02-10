let val = [25, 3, 7, 4, 13, 9] 
val.sort(function(a, b){return a-b}) // ordenar por ordem crescente

console.log(val)

console.log(val[0]) // mostra o valor no índice 0 que é 3
console.log(val[1])
console.log(val[2])
console.log(val[3])
console.log(val[4])
console.log(val[5])

for(let pos=0; pos < val.length; pos++) { // leia-se: enquanto 'pos' for menor que o comprimento do vetor (val.length), ele irá adicionar 1 'pos' a cada looping/repetição
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}



/* Utilizando  for in  automatizado para variáveis compostas (vetores/arrays) e objetos
   Estrutura: for (    in    ) { 
    console.log(   )
} 

A estrutura a seguir simplifica a estrutura de cima: */

let g = 0
for( let g in val) {   
    console.log(val[g])
}
// leia-se: para cada posição (g) em val (vetores) será mostrado val[g]


// Há também a função .indexOf() que retonar/informa a chave/o índice em que está o valor que é colocado entre parênteses
console.log(val.indexOf(7)) // resposta será indíce 4, pois o valor 7 está no índice 4, lembrando que foi utilizada a função val.sort() que reorganizou os valores
console.log(val.indexOf(2)) // A resposta dará -1 o que significa para o js que o valor ñ foi encontrado no vetor/ na array

let pos = val.indexOf(5)
console.log(`O valor 8 está na posição ${pos}`)


//Para não mostrar -1 quando o valor ñ é encontrado, pode-se construir a seguinte estrutura:
let h = val.indexOf(2)
if (h == -1) {    
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${h}`)
}