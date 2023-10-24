/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt('Ingrese una palabra o frase')
console.log(frase.length);
console.log(frase.charAt(0));

//  Hola mundo
//  Escribe un programa

if(
    frase.charAt(0) === 'a' || 
    frase.charAt(0) === 'á' || 
    frase.charAt(0) === 'A' || 
    frase.charAt(0) === 'Á' || 
    frase.charAt(0) === 'e' || 
    frase.charAt(0) === 'é' || 
    frase.charAt(0) === 'E' || 
    frase.charAt(0) === 'É' || 
    frase.charAt(0) === 'i' || 
    frase.charAt(0) === 'í' || 
    frase.charAt(0) === 'I' || 
    frase.charAt(0) === 'Í' || 
    frase.charAt(0) === 'o' || 
    frase.charAt(0) === 'ó' || 
    frase.charAt(0) === 'O' || 
    frase.charAt(0) === 'Ó' || 
    frase.charAt(0) === 'u' ||
    frase.charAt(0) === 'ú' ||
    frase.charAt(0) === 'U' ||
    frase.charAt(0) === 'Ú'){
      document.write(frase.charAt(0))
}