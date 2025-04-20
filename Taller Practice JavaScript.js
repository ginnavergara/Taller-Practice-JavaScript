
// 1. Función que determine si un año es bisiesto
function esBisiesto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
// Ejemplo:
console.log("¿2024 es bisiesto?", esBisiesto(2024));

// 2. Función que convierta grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
// Ejemplo:
console.log("25°C en Fahrenheit:", celsiusAFahrenheit(25));

// 3. Función que devuelva el mayor de dos números
function mayorDeDos(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
// Ejemplo:
console.log("El mayor entre 5 y 9 es:", mayorDeDos(5, 9));

// 4. Función que convierta minutos en horas y minutos
function convertirMinutos(minutos) {
  const horas = Math.floor(minutos / 60);
  const mins = minutos % 60;
  return `${horas} horas y ${mins} minutos`;
}
// Ejemplo:
console.log("150 minutos son:", convertirMinutos(150));

// 5. Función que determine si un número está en un rango
function estaEnRango(numero, inicio, fin) {
  return numero >= inicio && numero <= fin;
}
// Ejemplo:
console.log("¿10 está entre 5 y 15?", estaEnRango(10, 5, 15));

// 6. Función que calcule el precio final con descuento
function calcularPrecioFinal(precioInicial, descuento) {
  const descuentoCalculado = (precioInicial * descuento) / 100;
  return precioInicial - descuentoCalculado;
}
// Ejemplo:
console.log("Precio final con 20% de descuento:", calcularPrecioFinal(100, 20));

// 7. Función que determine si una persona puede votar
function puedeVotar(edad) {
  return edad >= 18;
}
// Ejemplo:
console.log("¿Una persona de 17 años puede votar?", puedeVotar(17));

// 8. Función que calcule el área de un triángulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// Ejemplo:
console.log("Área de un triángulo de base 10 y altura 5:", calcularAreaTriangulo(10, 5));
