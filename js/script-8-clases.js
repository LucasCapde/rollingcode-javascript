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
  mostrarDatos(){
    document.write(`
    <h2>Pokemon: ${this.nombre}</h2>
    <ul>
      <li>Nivel: ${this.nivel}</li>
      <li>Número en Pokedex: ${this.numPokedex}</li>
      <li>Tipo: ${this.tipo}</li>
      <li>Ataques: ${this.ataques}</li>
    </ul>
    `)
  }
}



//* Nueva clase (heredera de la clase anterior)
class PokemonLegendario extends Pokemon{
  constructor(nombre, nivel, numPokedex, tipo, ataques, ataquesEspeciales){
    //  Puedo invocar al constructor de la Clase Padre
    super(nombre, nivel, numPokedex, tipo, ataques)
    this.ataquesEspeciales = ataquesEspeciales
    this.rareza = 'Único'
  }
  //  Get y Set

  //  Métodos
  mostrarDatos(){
    //  super.mostrarDatos()
    document.write(`
    <h2>Pokemon: ${this.nombre}</h2>
    <ul>
      <li>Nivel: ${this.nivel}</li>
      <li>Número en Pokedex: ${this.numPokedex}</li>
      <li>Tipo: ${this.tipo}</li>
      <li>Ataques: ${this.ataques}</li>
      <li>Ataques especiales: ${this.ataquesEspeciales}</li>
      <li>Rareza: ${this.rareza}</li>
    </ul>
    `)
  }
}




//* Creando/instanciando el objeto
const bulbasaur = new Pokemon('Bulbasaur', 5, 1, 'Planta', ['hojas', 'latigo cepa', 'placaje'])
console.log(bulbasaur);

//  Propiedad pública
document.write(`<h2>Pokemon: ${bulbasaur.nombre}</h2>`)
//  Propiedad privada
document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`) // No lo encuentra

//  Modificar un valor con un setter
bulbasaur.nivel = 7
document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`) // No lo encuentra

bulbasaur.mostrarDatos()


//! Nuevo objeto:
const charmander = new Pokemon('Charmander', 3, 4, 'Fuego', ['arañazo', 'bola de humo', 'ascuas'])

charmander.mostrarDatos()



//! Objeto heredado
const mewtwo = new PokemonLegendario('Mewtwo', 100, 150, 'Psíquico', ['Confusión','psicocorte'], ['Psico-Quiebre'])

mewtwo.mostrarDatos()