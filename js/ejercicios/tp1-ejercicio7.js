// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = parseInt(prompt('Ingrese un número'))
const num2 = parseInt(prompt('Ingrese otro número'))
const num3 = parseInt(prompt('Ingrese un tercer número'))

if(num1 > num2 && num1 > num3){
  document.write(`El primer número (${num1}) es mayor que el segundo número (${num2}) y que el tercero (${num3})`);
} else if(num3 > num2){
  document.write(`El tercer número (${num3}) es mayor que el primer número (${num1}) y que el segundo (${num2})`);
} else if(num2 > num3){
  document.write(`El segundo número (${num2}) es mayor que el primer número (${num1}) y que el tercero (${num3})`);
} else{
  document.write(`Los números ingresados son iguales (${num1})`)
}