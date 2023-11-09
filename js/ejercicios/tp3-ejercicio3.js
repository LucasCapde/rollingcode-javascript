/*
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array 
el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:

Suma		Apariciones
  2		      1
  3		      5
  4		      5
  5		      4
  6		      8
  7		      6
  8		      5
  9		      5
  10        4
  11	      2
  12	      2
*/

const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]

for(let indiceApariciones = 0; indiceApariciones < 50; indiceApariciones++){
  const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1
  const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1
  const sumaDados = numeroAleatorio1 + numeroAleatorio2
  console.log(numeroAleatorio1, numeroAleatorio2, sumaDados);
  apariciones[sumaDados]++
}

console.log(apariciones);

document.write(`
  <table>
    <thead>
      <tr>
        <th>Sumas</th>
        <th>Apariciones</th>
      </tr>
    </thead>
    <tbody>
`)

for(let i = 2; i <= 12; i++){
  document.write(`
        <tr>
          <td>${i}</td>
          <td>${apariciones[i]}</td>
        </tr>
  `)
}

document.write(`
    </tbody>
  </table>
`)