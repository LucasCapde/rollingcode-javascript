/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt('Ingrese una palabra o frase')
frase = frase.toLowerCase()
//  Hola mundo
//  Escribe un programa

for (let i = 0; i < frase.length; i++) {
  if(
    frase.charAt(i) === 'a' || 
    frase.charAt(i) === 'á' || 
    frase.charAt(i) === 'e' || 
    frase.charAt(i) === 'é' || 
    frase.charAt(i) === 'i' || 
    frase.charAt(i) === 'í' || 
    frase.charAt(i) === 'o' || 
    frase.charAt(i) === 'ó' || 
    frase.charAt(i) === 'u' ||
    frase.charAt(i) === 'ú'){
      document.write(frase.charAt(i))
    }
}