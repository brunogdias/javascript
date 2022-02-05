function verificar() {
    var data = new Date() // traz a data completa atual em zulu
    var ano = data.getFullYear() //pegará o ano cheio com 4 dígitos da variavel data 
    var fano = document.getElementById('txtano') // poderia ser usado document.querySelector('#txtano')
    var res = document.querySelector('#res') // poderia ser usado document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //fano.value.length  verifica se os dados/valores digitados na caixa são maiores que 0 ou não está vazia. Já Number em (fano.value) converte para nº o que é digitado na caixa, pois a princípio é reconhecido como uma string/texto. 
        alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // é uma forma de criar uma imagem dinamicamente, ao invés de usar o código html        
        if (fsex[0].checked) { //leia-se: se o 1º botão criado for marcado....            
            if (idade <= 1) {
                img.setAttribute('src', 'bebe-h.png') // todo esse comando é o mesmo que colocar no html <img src='bebe-h.png'>
                genero = 'um bebê'
            } else if (idade < 12) {
                img.setAttribute('src', 'menino.png')
                genero = "um menino"
            } else if (idade < 22) {
                img.setAttribute('src', 'rapaz.png')
                genero = "um jovem"
            } else if (idade < 60) {
                img.setAttribute('src', 'homem.png')
                genero = "um homem"
            } else {
                img.setAttribute('src', 'idoso.png')
                genero = "um idoso"
            }            
        } else if (fsex[1].checked){ // se não, o 2º botão criado for marcado....             
            if (idade <= 1) {
                img.setAttribute('src', 'bebe-m.png')
                genero = "um bebê"
            } else if (idade < 12) {
                img.setAttribute('src', 'menina.png')
                genero = "uma menina"
            } else if (idade < 22) {
                img.setAttribute('src', 'moca.png')
                genero = "uma jovem"
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher.png')
                genero = "uma mulher"
            } else {
                img.setAttribute('src', 'idosa.png')
                genero = "uma idosa"
            }  
        }
        res.style.textAlign = 'center' // uma forma de alinhar por código javascript        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img) //esse comando permite que seja mostrada a imagem dinâmica criada acima de acordo com o(s) critério(s) atendido(s)
        
    }
}