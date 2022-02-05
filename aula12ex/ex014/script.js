function rodar() {
    var msg = document.getElementById('mensagem') 
    var img = document.getElementById('imagem')
    var agora = new Date() // esse comando faz o código buscar a data e a hora zulu de acordo com os dados do sistema utilizado no momento
    var hora = agora.getHours() // esse comando puxa somente qual é a hora (local) de dentro da variável agora
    var minuto = agora.getMinutes()
    var h = 'partedodia'   
    hora = 4
    minuto =9
    if (hora < 10){
        hora = "0" + hora
    }
    if (minuto < 10){
        minuto = "0" + minuto
    }    
    if (hora >= 5 && hora < 12) {
        img.src = 'fotomanha.png' // esse comando mostrará a imagem (fotomanha.png) do código html se a condição (if) acima for atendida
        document.body.style.background = '#e2cd9f' //  esse comando irá alterar a cor de fundo se a condição (if) acima for atendida
        h = 'manhã'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        h = 'tarde'
    } else if (hora >= 18 && hora < 24) {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        h = 'noite'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        h = 'manhã'
    }
    msg.innerHTML =`Agora são ${hora} horas e ${minuto} minutos da ${h}.`    
}
