/*
Un objeto es un valor nativo de JavaScript. Representa una porción de la realidad.
*/


//! Una manera de declararlo es con notación literal:
const pelicula = {
  //  Propiedades: Están compuestas de (clave: valor)
  titulo: 'La máscara',
  anio: 1994,
  duracion: '1h 40 min',
  genero: ['comedia', 'fantasía'],

  //  Métodos
  iniciarPeli: function (){
    //  Con ´this' entro al objeto que aún no fue creado (pelicula)
    console.log(this);
    document.write(`<p>Comenzó la reproducción de la película ${this.titulo}</p>`)
  },
  pausarPeli: () => {
    document.write(`<p>Se pausó la película...</p>`)
  }
}


/*
------------------------------------------------------------------------------------------------
*/


//* Mostrar el objeto:
console.log(pelicula);
document.write(pelicula)
document.write(`<h1>Película: ${pelicula.titulo}</h1>`)
document.write(`<p>Duración: ${pelicula.duracion}</p>`)
document.write(`<p>Año de estreno: ${pelicula['anio']}</p>`)
//  Cuando me equivoco en el nombre de la propiedad
document.write(`<p>Duración: ${pelicula.duraciom}</p>`)


/*
------------------------------------------------------------------------------------------------
*/


//* Agregarle nuevas propiedades a un objeto:
pelicula.estado = true;
console.log(pelicula);
pelicula.genero.push('aventura')
console.log(pelicula.genero);


/*
------------------------------------------------------------------------------------------------
*/


//* Modificar propiedades a un objeto
pelicula.estado = false;
console.log(pelicula);


/*
------------------------------------------------------------------------------------------------
*/


//* Eliminar propiedad de un objeto
delete pelicula.titulo
console.log(pelicula);


/*
------------------------------------------------------------------------------------------------
*/


//* Invocar o llamar a un método de un objeto
pelicula.iniciarPeli()
pelicula.pausarPeli()