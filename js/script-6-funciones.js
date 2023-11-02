//!  Las funciones son un bloque de código aislado que uso para repetir una determinada cantidad de veces
//*  Funciones Declarativas:
//  Primero, debo crear la función (haremos una función sin parámetros)

function saludar(){
  document.write(`<p>Hola mundo !</p>`)
}


//  Función con parámetros:

function saludoCompleto(nombre, apellido){
  const nombreCompleto = nombre + ' ' + apellido
  document.write(`<p>Hola ${nombreCompleto}. Que tengas un buen día !</p>`)
}


//  Para que la función se ejecute, debo invocar a la función
saludar()

saludoCompleto('Lucas', 'Capdevila')

const nombre = prompt('Ingrese su nombre')
const apellido = prompt('Ingrese su apellido')

saludoCompleto(nombre, apellido)
saludoCompleto()



//*  Funciones que devuelven un dato:

function multiplicar(num1, num2){
  let resultado = num1 * num2
  return resultado
}

//  Puedo guardar una función en una variable
const respuesta = multiplicar(5, 3)

document.write(`<p>La respuesta de la multiplicación es ${respuesta}</p>`)
document.write(`<p>La respuesta de la multiplicación es ${multiplicar(7, 3)}</p>`)



//* Arrow functions:
const sumar = (num1, num2) => {
  let resultado = num1 + num2
  return resultado
}

document.write(`<p>La respuesta de la multiplicación es ${sumar(10, 15)}</p>`)