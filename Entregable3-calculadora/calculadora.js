/*1.
  Paso 1. Declaración de Variables
Para comenzar con el desarrollo de este laboratorio, comience declarando un total de 2 
variables con un valor numérico asignado por usted. Estas variables serán los numero con 
los cuales usted realizará las operaciones matemáticas. 
Adicionalmente cree una variable para almacenar la operación matemática que desea 
realizar. Esta va a tomar valores de “suma”, “resta”, “multiplicación” y “división”
*/

let num1=1, num2=1;
let operacion = "";

/*Paso 2. Función para realizar operaciones 
Crea una función llamada realizarOperacion que reciba tres parámetros: num1, num2 
y operación. Dentro de la función, utiliza una estructura condicional (if...else if...else) para realizar la operación indicada en el parámetro operacion:

Paso 3. Realizar validaciones de datos y operaciones. 
Utiliza una estructura condicional para comprobar que la operación ingresada es válida. Si la operación no es una de las cuatro opciones mencionadas, devuelve un mensaje de error. Asegúrate de manejar correctamente la división por cero en la operación de división. Puedes realizar esto con ayuda de la estructura condicional if.
*/

function realizarOperacion(num1, num2, operacion) {
  // ignorar mayus y tildes
  operacion = operacion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // me parecio mas adecuado en este tipo de operaciones usar switch
  switch (operacion) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "multiplicacion":
      return num1 * num2;
    case "division":
      //uso de if para controlar división por 0
      if (num2 === 0) {
        return("No se puede dividir por cero.");
      }
      return num1 / num2;
    default:
      return("Operación no válida.");
  }
}

/*
Paso 4. Bucle para realizar múltiples operaciones. 
Crea un bucle while que permita al usuario realizar varias operaciones de manera continua. El bucle debe continuar hasta que el usuario ingrese la palabra "salir" como la operación. 
Dentro del bucle, pide al usuario que ingrese los dos números y la operación que desea 
realizar (puedes simular esto con prompt o valores fijos para simplificar). 
Después de cada operación, muestra el resultado de la operación y pregunta al usuario si 
desea realizar otra operación. 
*/

// elegí hacerlo con for y valores fijos: 
const operaciones = [
  { num1: 10, num2: 5, operacion: "suma" },
  { num1: 15, num2: 3, operacion: "resta" },
  { num1: 7, num2: 3, operacion: "multiplicación" },
  { num1: 20, num2: 4, operacion: "división" },
  { num1: 5, num2: 0, operacion: "division" }, // para controlar la división por cero
  {num1: null, num2: null, operacion: "salir"} 
];

//ciclo para recorrer todas las operaciones
for (let index = 0; index < operaciones.length; index++) {
  let {num1, num2, operacion} = operaciones[index]; // desestructurar el objeto

  if (operacion === "salir") {
    console.log("¡Has salido, hasta pronto!");
    break; // Terminar el ciclo si la operación es "salir"
  }

  const resultado = realizarOperacion(num1,num2, operacion);

  console.log(`Operación: ${operacion}`);
  console.log(`Número 1: ${num1}`);
  console.log(`Número 2: ${num2}`);
  console.log(`Resultado: ${resultado}\n`);
}