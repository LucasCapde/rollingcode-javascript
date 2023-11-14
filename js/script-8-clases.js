/*
Trabajando con un objeto (Pokemon)
*Propiedades:
  Nombre, nivel, numPokedex, tipo, ataques

Para definir este objeto, vamos a usar una Clase. Las Clases son "moldes" que usamos para crear objetos que sean similares.
*/

class Pokemon{
  //  Declarando propiedad privada
  #nivel;

  //  Hay un método (constructor) que ya viene por defecto. Debo definir qué hará este método.
  constructor(nombre, nivel, numPokedex, tipo, ataques){
    //nombre propiedad = valor
    this.nombre = nombre;
    this.#nivel = nivel;
    this.numPokedex = numPokedex;
    this.tipo = tipo;
    this.ataques = ataques;
    //  Propiedades por defecto (no obligatorio):
    this.estado = true;
  }
  //*/  Propiedades computadas (get y set)
  get nivel() {
    //  Devuelvo la propiedad privada (nivel)
    return this.#nivel
  }

  set nivel(nuevoNivel) {
    //  Recibe el nuevo valor (7)
    if(nuevoNivel >= 1 && nuevoNivel <= 100){
      this.#nivel = nuevoNivel
    } else{
      alert('El nivel debe ser mayor o igual a 1')
    }
  }

  //*  Métodos
}

//* Creando/instanciando el objeto
const bulbasaur = new Pokemon('Bulbasaur', 5, 1, 'planta', ['hojas', 'latigo cepa', 'placaje'])
console.log(bulbasaur);

//  Propiedad pública
document.write(`<h2>Pokemon: ${bulbasaur.nombre}</h2>`)
//  Propiedad privada
document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`) // No lo encuentra

//  Modificar un valor con un setter
bulbasaur.nivel = 7
document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`) // No lo encuentra