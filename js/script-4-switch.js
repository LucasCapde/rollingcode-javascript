//  Usamos SWITCH cuando tenemos muchos IFs anidados

/*
Para el ejemplo, simularemos que somos un banco nuevo en la ciudad y a nuestros nuevos 
clientes les regalamos un pequeño saldo para atraer aún más nuevos clientes.

Operaciones válidas: consultar saldo, ingresar dinero y extraer dinero.
*/

//*  Aquí vemos un ejemplo de IFs anidados


// let saldo = 1000

// let opcion = prompt('Seleccione una opción: 1- Consultar saldo, 2- Ingresar dinero, 3- Extraer dinero')
// opcion = opcion.toLowerCase()
/*
if(opcion === 1){
  document.write(`Su saldo es $${saldo}`)
} else if(opcion === 2){
  document.write(`Ingreso de dinero`)
} else if(opcion === 3){
  document.write(`Extracción de dinero`)
} else{
  document.write(`Opción no válida`)
}
*/

//*   Solucionamos usando switch

let saldo = 1000

do {
  let opcion = prompt('Seleccione una opción: 1- Consultar saldo, 2- Ingresar dinero, 3- Extraer dinero')
  opcion = opcion.toLowerCase()
  
  
  switch(opcion){
    case 'consultar saldo':
    case 'saldo':
    case '1':
      document.write(`Su saldo actual es $${saldo} <br>`)
      break
    case '2':
      const deposito = parseFloat(prompt('Ingrese el monto que desea depositar'))
      //  Incremento el saldo
      //  console.log(isNaN(deposito));   //*  Me devuelve true si es un número y false en caso de ser número
      
      //  Preguntar si el depósito es un número
      if(!isNaN(deposito) && deposito > 0){
        saldo += deposito
        document.write(`Su saldo actual es $${saldo}`)
      } else{
        alert('Usted ingresó un monto no válido')
      }
    break
    case '3':
      const monto = parseFloat(prompt('Ingrese el monto que desea extraer'))
      if(!isNaN(monto) && monto > 0 && monto <= saldo){
        saldo -= monto
        alert(`Usted extrajo $${monto}. Su saldo actual es $${saldo}`)
      } else{
        alert('Usted ingresó un monto no válido')
      }
      break
    default:
      document.write(`Opción no válida`)
      break
  }

} while (confirm('¿ Desea realizar otra operación ?'));