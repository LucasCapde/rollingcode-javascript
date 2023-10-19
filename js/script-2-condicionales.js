/*
Los condicionales son instrucciones que, en caso de cumplirse, usamos para ejecutar una pieza de código. Si no se cumplen, pueden ejecutar otra pieza de código o no ejecutar nada.

La estructura del condicional simple es la siguiente:
if(condición lógica){
  código a ejecutar si se cumple la condición lógica
}
*/

//  Ejercicio: Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt('Ingresa el primer número'))
let num2 = parseInt(prompt('Ingresa el segundo número'))

if(num1 > num2){
  console.log(num1 + ' es mayor que ' + num2);
}