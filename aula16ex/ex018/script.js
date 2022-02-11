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

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // leia-se: se ao buscar o nº que está no índice   n   constar diferente (!=) de -1 (ou seja, ñ foi encontrado), então...
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // leia-se: se a variável isNumero (que é num que é fnum, ou seja, a caixa) for realmente um número   e    ele NÃO estiver na lista, ele será adicionado... 
        valores.push(Number(num.value)) // push() é adicionar um elemento no array/vetor
        let item = document.createElement('option') //esse comando é para criar  tag's (option) de forma dinâmica para que através delas, os dados digitados na caixa, possam ser adicionados para dentro da seleção (select). Ela não aparece visualmente, mas existe.
        item.text = `Valor ${num.value} adicionado.` //esse texto vai entrar exatamente na posição que se encontram as tag's option, cada vez que um dado for adicionado.
        lista.appendChild(item) // esse comando é que de fato irá exibir o   item.text  adicionado na lista.
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}        
    