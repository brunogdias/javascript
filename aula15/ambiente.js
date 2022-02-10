// Um array é uma variável composta que tem vários elementos. Cada elemento é composto por seu valor e por uma chave (key) de identificação.

let num = [7,3,1,12,9]
num.sort() // organizar os valores em ordem crescente considerando a primera casa
num.push(34) // acrescenta o valor solicitado após o último valor
console.log(num) // mostra/lê os vetores de num entre colchetes
console.log(`O vetor tem ${num.length} posições`) // mostra o total de posições de um vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o valor da posição 0

/* No exemplo acima num é o vetor ou array  
O colchete [ ] chama-se elemento
O que está dentro dos colchetes chama-se conteúdo/valor
E as posições que o conteúdo/valor ocupa se chama índice/chave iniciando sempre pelo 0 No exemplo acima temo os índices  0 1 2 3 4 */