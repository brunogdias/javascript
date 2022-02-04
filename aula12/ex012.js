var agora = new Date() // esse comando faz o código buscar a data e a hora zulu de acordo com os dados do sistema utilizado no momento
var hora = agora.getHours() // esse comando puxa somente a hora (local) de dentro da variável agora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}



var h = new Date()
    console.log(h)