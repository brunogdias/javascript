/* 
1) Estrutura de repetiação com teste lógico no início

while (condição) {
    xxxxxxxx
}
Vejamos:
*/

var a = 1
while (a <=3) {
    console.log(`Passo ${a}`)
    a++ // c + 1
}

/*
2) Estrutura de repetiação com teste lógico no final

do {
    xxxxxxx
} while (condição)

Vejamos:
*/

var b = 1
do {
    console.log(`Teste ${b}`)
    b++
} while (b <=5)
