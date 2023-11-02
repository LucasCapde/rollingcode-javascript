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