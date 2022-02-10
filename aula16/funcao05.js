//Função recursiva (quando uma função chama ela mesma)

/* Conceitos:

O fatorial de 5   5! = 5 x 4 x 3 x 2 x 1   é o mesmo que  5! = 5 x 4! (fatorial de 4), podemos dizer então   n! = n x (n-1)!
Somente o fatorial de 1 é igual a 1    1! = 1

*/

function fatorial(n) {
    if (n== 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))