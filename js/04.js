// String o Cadenas de Texto
const tweet = 'Aprendiendo JavaScript con el curso de Aplicaciones web';
const producto2 = 'Monitor HD"';
const nombre = 'Juan Perez';
const email = 'correo@correo.com';
// length es para la extension
console.log("propiedad length")
console.log(tweet.length);
console.log(producto2);
// IndexOf (retorna posición)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));
// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
//numeros
const numero1 = 100, numero2 = 200, numero3 = 9, numero4 = 3, numero5 = -5;

console.log(numero1 + numero2);
console.log(numero2 - numero1);
console.log(numero2 * numero1);
console.log(numero2 / numero1);
console.log(numero3 % numero4);

// Objeto Math

let resultado;

resultado = Math.PI;
console.log(resultado);
resultado = Math.round(2.5);
resultado = Math.ceil(2.1); // Ceil siempre redondea hacia arriba
resultado = Math.floor(2.9); // Floor siempre redondea hacia abajo
resultado = Math.sqrt(144);
resultado = Math.abs(-200);
resultado = Math.min( 3, 5, 1, 8 , 2, 10 );
resultado = Math.max( 3, 5, 1, 8 , 2, 10 );
resultado = Math.random();
resultado = Math.floor( Math.random() * 30 );
//resultado en consola
console.log(resultado);
//resultado en documento html
document.write("Respuesta en el documento html resultado="+resultado);