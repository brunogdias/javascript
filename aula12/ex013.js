var agora = new Date() // esse comando faz o código buscar a data e a hora zulu de acordo com os dados do sistema utilizado no momento
var diaSem = agora.getDay() // esse comando puxa somente qual é o dia da semana de dentro da variável agora
/*Para o javascript: 0 = dom  1 = seg  2= ter  3 = qua  4 = qui  5 = sex  6 = sab  */

switch (diaSem) { // switch é uma estrutura para se testar dados/situações pontuais. Ele é mais limitado que o If
    case 0: // leia-se: se diaSem for 0 mostrará Domingo e finaliza. Caso nao seja 0, segue para a segunda situação abaixo e se repete o processo.
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: // para caso nenhum dos cases anteriores sejam 
        console.log('[ERRO] Dia da semana inválido') 
        break //comando opcional pois não há mais comandos abaixo
}
