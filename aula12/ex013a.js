var agora = new Date
var horas = agora.getHours()
var minutos = agora.getMinutes()
var seconds = agora.getSeconds()
var dianumber = agora.getDay()
switch (dianumber){
    case 0: 
        var diasem = "Domingo";
        break  // leia-se: se dianumber for 0 a variável diasem recebe/será Domingo e finaliza. Caso nao seja 0, segue para a segunda situação abaixo e se repete o processo.
    case 1:
        var diasem = "Segunda";
        break
    case 2:
        var diasem = "Terça";
        break
    case 3:
        var diasem = "Quarta";
        break
    case 4:
        var diasem = "Quinta"
        break
    case 5:
        var diasem = "Sexta"
        break
    default:
        var diasem = "Sabado"
        break
/*Para o javascript: 0 = dom  1 = seg  2= ter  3 = qua  4 = qui  5 = sex  6 = sab  */
}

console.log(`Hoje é ${diasem}. Agora são ${horas} horas, ${minutos} minutos e ${seconds} segundos`)