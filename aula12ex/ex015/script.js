function verificar() {
    var data = new Date() // traz a data completa atual com horas em zulu
    var ano = data.getFullYear() //pegará o ano cheio com 4 dígitos da variavel data 
    var fano = document.getElementById('txtano') // poderia ser usado document.querySelector('#txtano'). Essa é a caixa que será digitado o ano de nascimento.
    var res = document.querySelector('#res') // poderia ser usado document.getElementById('res'). Essa é a div que traz a frase "Preencha os dados acima para ver o resultado!"
    var fsex = document.getElementsByName('sexo') // Esse são os botões em radiais que são marcados.
    var idade = ano - Number(fano.value) // Number(fano.value) converte para nº o que é digitado na caixa (fano), pois a princípio é reconhecido como uma string/texto.
    var genero = '' 
    var img = document.createElement('img') // é uma forma de criar uma imagem dinamicamente, ao invés de usar o código html <img src='xxxxx'>    
    if (fano.value.length == 0 || Number(fano.value) > ano) { //fano.value.length verifica se os dados/valores digitados na caixa são maiores que 0 ou não está vazia. A condição desse if é: se a caixa possuir dados iguais a zero ou maiores que o ano corrente, ao clicar no botão verificar (que dispara a função verificar() ), dará um alerta de erro, conforme mensagem a seguir.
        alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {            
        if (fsex[0].checked) { //leia-se: se o 1º botão radial (masc) for marcado acontecerá uma das condições abaixo que estão dentro desse bloco.            
            if (idade <= 1) {
                img.setAttribute('src', 'bebe-h.png') // todo esse comando é o mesmo que colocar no html <img src='bebe-h.png'>. Ou seja, atribuir o arquvio bebe-h.png na variavel img, caso a condição seja atendida. Mas ainda não é o comando para exibir a imagem. Esse comando está ao final desse código. Será res.appendChild(img)
                genero = 'um bebê' // atribuir o nome 'um bebê' na variavel genero, caso a condição seja atendida.
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
        } else if (fsex[1].checked){ // leia-se: se o 2º botão radial (fem) for marcado acontecerá uma das condições abaixo que estão dentro desse bloco.        
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
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s). <br>` //essa frase substituirá a frase "Preencha os dados acima para ver o resultado!" quando a função verificar() for acionada.
        res.style.textAlign = 'center' // uma forma de alinhar por código javascript.  
        res.appendChild(img) //esse comando permite que seja mostrada a imagem dinâmica criada de acordo com o(s) critério (if) atendido
    }
}