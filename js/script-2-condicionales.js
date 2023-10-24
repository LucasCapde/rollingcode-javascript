/*
Los condicionales son instrucciones que, en caso de cumplirse, usamos para ejecutar una pieza de código. Si no se cumplen, pueden ejecutar otra pieza de código o no ejecutar nada.

La estructura del condicional simple es la siguiente:
if(condición lógica){
  código a ejecutar si se cumple la condición lógica
}
*/

//  Ejercicio: Escribe un programa que pida 2 números y escriba en la pantalla el mayor de los tres.

const num1 = parseInt(prompt('Ingrese un número'))
const num2 = parseInt(prompt('Ingrese otro número'))

if(num1 > num2){
  document.write(`El número ${num1} es mayor que ${num2}`);
} else if(num2 > num1){
  document.write(`El número ${num2} es mayor que ${num1}`);
} else{
  document.write(`Los números ingresados son iguales (${num1})`);
}