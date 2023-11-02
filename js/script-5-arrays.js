/*
Los arrays son listas que pueden contener cualquier tipo de datos. No hay un límite 
establecido de cuántos items puede contener un array.
*/  

//*  Declaramos un array vacío
const alumnos = []

//*  Declaramos un array con valores (películas)
const peliculas = ['Ironman 1', 'El rey león', 'Harry Potter', 'BladeRunner', 2023, true]

//*  Mostramos un array (en consola)
//  console.log(peliculas);

//*  Mostramos un array (en pantalla)
document.write(`<p>${peliculas}</p>`)

//*  Mostramos un elemento en particular. En este caso, el primero (índice 0)
document.write(`<p>Primer elemento del array: ${peliculas[0]}</p>`)

//*  Se usa el método length para calcular la cantidad de elementos en el array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`)

//*  Mostramos un elemento en particular. En este caso, el último (índice 5)
document.write(`<p>Último elemento del array: ${peliculas[peliculas.length-1]}</p>`)

//*  Se puede consultar un elemento específico del array en base a su posición (no existe)
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`)

//* Dibujando en una lista <ul> las películas
document.write(`<h2>Lista de películas (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)





//!  Agregando elementos a un array
//*  Agregar al principio:
peliculas.unshift('El Grinch', 'Mi pobre angelito')

document.write(`<h2>Lista de películas + 2 elementos (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)


//* Agregar en alguna posición del medio:
peliculas.splice(5, 0, 'Martes 13')

document.write(`<h2>Lista de películas + 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)


//* Agregar al final:
peliculas.push('Troya')

document.write(`<h2>Lista de películas + 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)





//!  Modificando elementos de un array
peliculas[7] = 'El padrino'

document.write(`<h2>Lista de películas, modifico 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)





//! Eliminando elementos de un array
//* Eliminar el primer elemento

peliculas.shift()

document.write(`<h2>Lista de películas, elimino 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)


//* Eliminar un elemento de alguna posición del medio

peliculas.splice(7, 1)
// peliculas.splice(2, 3)   Elimino 3 elementos desde la posición 2
// peliculas.splice(2)    Elimino todo lo que esté después de la posición 2

document.write(`<h2>Lista de películas, elimino 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)


//* Eliminar el último elemento del array

peliculas.pop()

document.write(`<h2>Lista de películas, elimino 1 elemento (${peliculas.length}):</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)