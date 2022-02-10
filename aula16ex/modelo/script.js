let num = document.querySelector('#fnum') // poderia ser sbstituído por document.getElementById('')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = [] // esse vetor/array será utilizado para analisar os dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) { // leia-se se na lista o nº de    n   for diferente (!=) de -1 (ñ foi encontrado)...
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){ // leia-se: se a variável isNumero (que é num que é fnum, ou seja, a caixa) receber um número   e    ele NÃO estiver na lista, ele será adicionado. 
        
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}        
    