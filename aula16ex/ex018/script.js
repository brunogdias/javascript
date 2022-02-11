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
        res.innerHTML = '' // esse comando limpa a div res caso já conste algum dado anterior de análise.
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // comando para apagar o dado digitado na caixa, após ele ser adicionado na lista ou rejeitado.
    num.focus() // comando que faz o curso voltar a piscar dentro da caixa após todas as ações acima terem ocorrido.
}        

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // quantidade de valores da 'let valores' foram adicionados na lista.
        let maior = valores[0] // indica que o primeiro nº adicionado (que está no índice 0) é o maior nº, afinal há somente ele até o momento
        let menor = valores[0] // indica que o primeiro nº adicionado (que está no índice 0) é o menor nº, afinal há somente ele até o momento
        let soma = 0
        let media = 0
        for(let pos in valores) { //leia-se: 'para cada pos em valores, farei os testes abaixo':       (Esse comando 'for in' faz uma busca em todo o vetor)
            soma += valores[pos] // leia-se: somará 'let soma' aos valores pos (valores atuais)
            if (valores[pos] > maior) // leia-se: se os valores na posição pos for > que 'let maior'...
                maior = valores[pos] // ... o 'let maior' valor passa ser valores pos (ou seja, deixa de ser o anterior e passa ser o atual)
            if (valores[pos] < menor) // leia-se: se os valores na posição pos for < que 'let menor'...
                menor = valores[pos] // ... o 'let menor' valor passa ser valores pos (ou seja, deixa de ser o anterior e passa ser o atual)
        }
        res.innerHTML = '' // esse comando limpa a div res caso já conste algum dado anterior de análise. Se retirar esse comando e clicar no botão finalizar mais de uma vez, as análises vão se replicar.
        if (tot == 1) {
            res.innerHTML += `<p> Ao todo, temos ${tot} número cadastrado. </p>`
        } else {
            res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        }
        media = soma / tot  // a soma de todos os valores da lista divididos pela quantidade de valores incluidos na lista. Ex: (5 + 33 + 14) / 3 
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>` 
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`    
    }
}

function limpar () {
    lista.innerHTML= ''
    res.innerHTML = ''
}