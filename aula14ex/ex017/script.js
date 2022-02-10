function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)
    let c = 1    
    if (num.value.length == 0) { // se o comprimento (length) de num for 0 / vazio ocorrerá msg abaixo
        alert('Por favor, digite um número!')
    } else {        
        tab.innerHTML = ''    // isso faz limpar o select antes de começar um novo cálculo
        while (c <= 50) {    // poderia substituir por:   for (let c = 1; c <=10; c++)
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            c++
            tab.appendChild(item) //appendChild significa "adicionar um elemento filho" 
            
        }
    }
}

function limpar() {
    let l = document.getElementById('seltab')
    l.innerHTML = ''
    

}