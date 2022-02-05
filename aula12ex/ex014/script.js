function rodar() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`
}