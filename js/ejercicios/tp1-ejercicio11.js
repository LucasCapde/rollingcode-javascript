/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
(hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/

let num = parseInt(prompt('Ingrese un número'))
let divisores = [2, 3, 5, 7]

for (let i = 0; i < divisores.length; i++) {
  if(num % divisores[i] === 0){
    document.write('El número es divisible por ' + divisores[i] + '<br>');
  }
}