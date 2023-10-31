/*
Los arrays son listas que pueden contener cualquier tipo de datos. No hay un límite 
establecido de cuántos items puede contener un array.
*/  

//  Declaramos un array vacío
const alumnos = []

//  Declaramos un array con valores (películas)
const peliculas = ['Ironman 1', 'El rey león', 'Harry Potter', 'BladeRunner', 2023, true]

//  Mostramos un array (en consola)
console.log(peliculas);

//  Mostramos un array (en pantalla)
document.write(`<p>${peliculas}</p>`)

//  Mostramos un elemento en particular. En este caso, el primero (índice 0)
document.write(`<p>Primer elemento del array: ${peliculas[0]}</p>`)

//  Se usa el método length para calcular la cantidad de elementos en el array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`)

//  Mostramos un elemento en particular. En este caso, el último (índice 5)
document.write(`<p>Último elemento del array: ${peliculas[peliculas.length-1]}</p>`)

//  Se puede consultar un elemento específico del array en base a su posición (no existe)
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`)


document.write(`<h2>Lista de películas:</h2>`)
document.write(`<ul>`)
for(let i = 0; i < peliculas.length; i++){
  document.write(`<li>${peliculas[i]}</li>`)
}
document.write(`</ul>`)