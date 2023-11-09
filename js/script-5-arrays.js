/*
Los arrays son listas que pueden contener cualquier tipo de datos. No hay un límite 
establecido de cuántos items puede contener un array.
*/

//*  Declaramos un array vacío
const alumnos = []

//*  Declaramos un array con valores (películas)
const peliculas = ['Ironman 1', 'El rey león', 'Harry Potter', 'BladeRunner', 2023, true]



//! ----- FUNCIONES -----
const mostrarPeliculas = (titulo) => {
  document.write(`<h2>Lista de películas ${titulo}:</h2>`)
  document.write(`<ul>`)
  for(let i = 0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
  }
  document.write(`</ul>`)
}

const mostrarPeliculasNuevas = (arrayPeliculas, titulo) => {
  document.write(`<h2>Lista de películas ${titulo}:</h2>`)

  //  Ejemplo de método map
  document.write(`<ul>`)
  arrayPeliculas.map((item) => document.write(`<li>${item}</li>`))
  document.write(`</ul>`)  
}




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
mostrarPeliculas('')





//!  Agregando elementos a un array
//*  Agregar al principio:
peliculas.unshift('El Grinch', 'Mi pobre angelito')
mostrarPeliculas(`+ 2 elementos (${peliculas.length})`)


//* Agregar en alguna posición del medio:
peliculas.splice(5, 0, 'Martes 13')
mostrarPeliculas(`+ 1 elemento (${peliculas.length})`)


//* Agregar al final:
peliculas.push('Troya')
mostrarPeliculas(`+ 1 elemento (${peliculas.length})`)





//!  Modificando elementos de un array
peliculas[7] = 'El padrino'
mostrarPeliculas(`- Modifico 1 elemento (${peliculas.length})`)





//! Eliminando elementos de un array
//* Eliminar el primer elemento

peliculas.shift()
mostrarPeliculas(`- Elimino 1 elemento (${peliculas.length})`)



//* Eliminar un elemento de alguna posición del medio

peliculas.splice(7, 1)
// peliculas.splice(2, 3)   Elimino 3 elementos desde la posición 2
// peliculas.splice(2)    Elimino todo lo que esté después de la posición 2

mostrarPeliculas(`- Elimino 1 elemento (${peliculas.length})`)



//* Eliminar el último elemento del array

peliculas.pop()
mostrarPeliculas(`- Elimino 1 elemento (${peliculas.length})`)



//*  Agregar un par de pelis

peliculas.push('Ironman 2', 'Ironman 3', 'Rocky', 'Rocky 2', 'Rocky 3')
mostrarPeliculas(`- Agrego elementos (${peliculas.length})`)



//*  Filtrar todos los elementos del arreglo

const peliculasIronman = peliculas.filter((pelicula) => pelicula.includes ('Ironman'))
mostrarPeliculasNuevas(peliculasIronman, 'Películas de Ironman')



//* Método find:
const peliculaBuscada = peliculas.find((item) => item === 'Harry Potter')
const peliculaBuscada2 = peliculas.find((item) => item === 'Batman')
const peliculaBuscada3 = peliculas.find((item) => item === 'Rocky')
const peliculaBuscada4 = peliculas.find((item) => item === 'BladeRunner')
document.write(`<p>Película buscada: ${peliculaBuscada}</p>`)

//  Podría modificar el resultado undefinded con if-else o un operador ternario         
document.write(`<p>Segunda película buscada (Batman): ${peliculaBuscada2}</p>`)



//* Operador ternario:
/*  
Es una forma de condicional más corta:
(condición lógica) ? el código si es verdadera la condición : el código si es falsa la condición
*/
//  Caso 1: Guardando el ternario en una variable
const respuestaTernario = (peliculaBuscada2 !== undefined) ? peliculaBuscada2 : 'No se encontró la película buscada';
document.write(`<p>Segunda película buscada (Batman): ${respuestaTernario}</p>`)

const respuestaTernario2 = (peliculaBuscada3 !== undefined) ? peliculaBuscada3 : 'No se encontró la película buscada';
document.write(`<p>Segunda película buscada (Rocky): ${respuestaTernario2}</p>`)

//  Caso 2: Usar el ternario dentro del mismo document.write
document.write(`<p>Segunda película buscada (BladeRunner): ${(peliculaBuscada4 !== undefined) ? peliculaBuscada4 : 'No se encontró la película buscada'}</p>`)