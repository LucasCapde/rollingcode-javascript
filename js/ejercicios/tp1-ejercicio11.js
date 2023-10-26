/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
(hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/

const num = parseInt(prompt('Ingrese un número'))

if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
  document.write('El número NO es divisible por 2, ni por 3, ni por 5 ni por 7');
} else{
  if(num % 2 === 0){
    document.write('El número es divisible por 2' + '<br>');
  }  
  if(num % 3 === 0){
    document.write('El número es divisible por 3' + '<br>');
  }  
  if(num % 5 === 0){
    document.write('El número es divisible por 5' + '<br>');
  }  
  if(num % 7 === 0){
    document.write('El número es divisible por 7' + '<br>');
  }
}