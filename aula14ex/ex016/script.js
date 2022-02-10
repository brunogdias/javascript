function contar() {
    let ini = document.getElementById('txti') // pode-se usar para esse caso tanto var ou let
    let fim = document.getElementById("txtf")  
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = "Contando: <br>"
        if (p <= 0 || p > f) {
            alert('Passo inválido! Consideraremos o Passo 1')
            p = 1
        }   
        if(i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) { // sinal de += leia-se: o c vai receber ele mesmo mais o p enquanto c for <= f
                res.innerHTML += `${c} \u{1F449} ` // sinal de += nessa linha é concatenação e não adição, pois essa linha estamos trantando de strings/textos. O código original do emoji é U+1F449.
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p ) {
            res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

function limpar() {
let limpar = document.getElementById('res')
limpar.innerHTML = 'Preparando a contagem...'
}

/* Elementos da estrutura for:
 O primeiro elemento chama-se inicialização
 O segundo elemento chama-se teste lógico
 O terceiro elemento chama-se incremento
 */
