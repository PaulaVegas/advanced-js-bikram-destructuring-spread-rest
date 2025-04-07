// //RESUELVE LOS EJERCICIOS AQUÍ
// Destructuring arrays
//  1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];

//  2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const emailLuis = empleados[0].email;
//  3.- Usa destructuración para cambiar los valores de a y b;

// // Inicialmente
let a = 5;
let b = 3;

// // Al final
// let a = 3;
// let b = 5;

[a, b] = [b, a]; // Cambia los valores de a y b usando destructuración
console.log(a); // 3
//  4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES; // Cambia las variables para que usen destructuración
console.log(maximaHoy);
console.log(maximaManana);

// Spread/Rest
//  5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
// sumEveryOther(6, 8, 2, 3, 1); //20
// sumEveryOther(11, 3, 12); //26

function sumEveryOther(...args) {
  let suma = 0;
  for (let i = 0; i < args.length; i++) {
    suma += args[i]; // Sumar todos los argumentos
  }
  return suma; // Devuelve la suma total
}
//  6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
// addOnlyNums(1, "perro", 2, 4); //7

function addOnlyNums(...args) {
  let suma = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      suma += args[i]; // Sumar solo los números
    }
  }
  return suma; // Devuelve la suma total
}

//  7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs("gato", "perro"); //2
// countTheArgs("gato", "perro", "pollo", "oso"); //4
function countTheArgs(...args) {
  return args.length; // Devuelve la cantidad de argumentos recibidos
}

//  8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2]; // Combina los dos arrays usando spread operator
}

//  9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...args) {
  return [...new Set(args)]; // Convierte el Set de nuevo a un array
}

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//  10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
function combineAllArrays(...arrays) {
  return arrays.flat(); // Combina todos los arrays usando flat()
}
//  11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args) {
  let result = 0; // Inicializa la variable result en 0
  for (let i = 0; i < args.length; i++) {
    result += args[i] ** 2; // Eleva al cuadrado y suma
  }
  return result; // Devuelve el resultado final
}
