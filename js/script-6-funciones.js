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