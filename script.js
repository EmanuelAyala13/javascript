// 1- Verificar si un número es par o impar
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " es un número impar");
    }
  }
  
  // Ejemplo de uso:
  verificarParImpar(7); // Output: 7 es un número impar
  verificarParImpar(10); // Output: 10 es un número par
  
  // 2- Comparar dos números y determinar cuál es mayor
  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
      console.log(num2 + " es mayor que " + num1);
    } else {
      console.log("Ambos números son iguales");
    }
  }
  
  // Ejemplo de uso:
  compararNumeros(5, 10); // Output: 10 es mayor que 5
  compararNumeros(7, 2); // Output: 7 es mayor que 2
  compararNumeros(4, 4); // Output: Ambos números son iguales
  
  // 3- Verificar si un número es múltiplo de 5
  function verificarMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5");
    } else {
      console.log(numero + " no es múltiplo de 5");
    }
  }
  
  // Ejemplo de uso:
  verificarMultiploDeCinco(15); // Output: 15 es múltiplo de 5
  verificarMultiploDeCinco(9); // Output: 9 no es múltiplo de 5
  
  // 4- Imprimir todos los números desde 0 hasta el número dado
  function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  
  // Ejemplo de uso:
  imprimirNumerosHasta(5); // Output: 0 1 2 3 4 5
  
  // 5- Imprimir una palabra un número de veces
  function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  
  // Ejemplo de uso:
  imprimirPalabra("Hola", 3); // Output: Hola Hola Hola
  
  // 6- Imprimir todos los valores de un array
  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  // Ejemplo de uso:
  const miArray = [1, 2, 3, 4, 5];
  imprimirArray(miArray); // Output: 1 2 3 4 5
  
  // 7- Imprimir todos los valores de un array excepto el de la 5ta posición
  function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { // El índice 4 representa la 5ta posición
        console.log(array[i]);
      }
    }
  }
  
  // Ejemplo de uso:
  const otroArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  imprimirArrayExceptoQuinto(otroArray); // Output: 10 20 30 40 60 70 80 90 100
  
  // 8- Multiplicar cada número del array por un número dado
  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5];
  multiplicarArrayPorNumero(numeros, 2); // Output: 2 4 6 8 10
  