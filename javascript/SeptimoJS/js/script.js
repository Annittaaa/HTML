/*
* Concepto básico de funciones o métodos:
*
* Una función JavaScript es un bloque de código diseñado para realizar una tarea particular.
* Una funcion JavaScript se ejecuta cuando "algo" lo invoca (lo llama).
* las funciones pueden ser propias, como por ejemplo:
* function guardarNombre(){
    ... bloque de instrucciones
}

*para que se ejecute es bloque de instrucciones, la funcion tiene que ser invocada ya sea un javascript o desde el html

*guardarNombre();
* o desde HTML .... onclick="guardarNombre()"

* Tambien existen funciones propias del lenguaje, que nos realizan algunas tareas de manera automática.


*/
// Ejemplo: Funciones útiles para cadenas de texto

//Funcion para conocer la longitud de una cadena, incluyendo los espacios

let cadena1="Hola, como estais todos hoy?❤️"
let nLetras=cadena1.length;
console.log(nLetras);

//Funcion que concatena
let cadena2="Bien, gracias!";
let cadena=cadena1.concat(" "+cadena2); //es lo mismo que cadena1+cadena2
console.log(cadena);

//Concatenar es un bucle
for (let i=1;i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena);

// Funcion para pasar a mayusculas una cadena de texto.

cadena1=cadena1.toUpperCase();
console.log(cadena1);

// Funcion para convertir una cadena a minuscula

cadena1=cadena1.toLowerCase(); //toLocaleLowerCase-> se refiere al idioma o configuración Local, pero el resultado suele ser el mismo toLowerCase
console.log(cadena1);

// Funcion para obtener el carácter que se encuentra en la posición indicada.

let letra=cadena1.charAt(0); //retorna
console.log(letra);

// Funcion indexOf(letra) calcula la posicion en la que se encuentra la letra indicada, siempre mostrará la primera posición.
let posicion=cadena1.indexOf('a');
console.log(posicion);

// lastIndexOf(letra) calcula la posicion en la que se encuentra la letra indicada, siempre mostrará la última posición.
//tanto indexOf cfomo lastIndexOf devuelven -1 si no se encuentra ese caracter.
posicion=cadena1.lastIndexOf('a');
console.log(posicion);

posicion=cadena1.lastIndexOf('x');
console.log(posicion);


// IMPORTANTE:
// La funcion lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezandoa contar desde el principio de la palabra.

// Funcion para extraer de una cadena:

//substring(inicio,final), extrae una porcion de una cadena de texto. El segundo parámetro es opcional. Si sólo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final.

let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);

// Cuando se indica el inicio y el final, se devuelde la parte de la cadena original comprendida entre la posicion inicial y la inmediatamente anterior a la posicion final (es decir, la posicion inicio esta incluida y la posicion final no):

//Otro ejemplo, si se le pasa la posicion inicial mayor a la final, se asume que es la posicion menor desde donde comienza y la mayor donde termina.

subcadena1=cadena1.substring(10,6)
console.log(subcadena1);

// Convertir una cadena a un array con split, se debe indicar el carácter separador.

let cadena3="Los alumnos son 15 y son muy listos";
let arraycadena3=cadena3.split(" ");
console.log(arraycadena3);
console.log(arraycadena3[1]);

//Con split también puedo extraer todas las letras de una cadena inficando el separador vacio ""

let array2Cadena3=cadena3.split("")
console.log(array2Cadena3);

// Funciones utiles para arrays

// Conocer la longitud de un array

let miArray=[1,2,3,4,5,6,7,8,9]
//Explicacion en la linea 145 
let micopiaArray=miArray // Con una asignación (=)
let numElementos=miArray.length;
console.log(numElementos);

//funcion para unir o concatenar dos arrays

let array3=array2Cadena3.concat(miArray);
console.log(array3);

// funcion join que es lo inverso a split en las cadenas, convierte un array en una cadena.

let deArrayaCadena=arraycadena3.join(" ");
console.log(deArrayaCadena);
let miArrayAcadena=miArray.join("-");
console.log(miArrayAcadena);

//funcion pop(), elimina el ultimo elemento array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.

let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

// Funcion push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez).

miArray.push("Ana");
console.log(miArray);

// Funcion shift(), elimina el primer elemento de un array y lo devuelve. El array original se ve modificado y su longitud disminiuida en 1 elemento.

let primero=miArray.shift();
console.log(primero);
console.log(miArray);

// Funcion unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez).

let otroValor=5;
miArray.unshift(otroValor);
console.log(miArray);

// Funcion reverse(), modifica un array colocando los elemento en el orden inverso a su posicion original
miArray.reverse();
console.log(miArray);

// Es usual realizar operaciones con arrays, si es necesario para el flujo del programa que el array origina se mantenga, debemos realizar una copia del array, porque estos metodos modifican directamente el array
//*********************************************************************************************************************************************************************************************************************
 // Funciones con número 

 //  El valor NaN, (del inglés, "Not a Number") JavaScript emplea el valor NaN para indicar un valor numérico no definido (por ejemplo, la division 0/0).

 // Función isNaN(), permite proteger a la aplicación de posibles valores numericos no definidos

 let numero1=10,numero2=5;
 let operacion=numero1/numero2;
 console.log(numero1/numero2); //NaN

 if(isNaN(operacion)){
    console.log("resultado indefinido");
 }else{
    console.log("El resultado es "+numero1/numero2);
 }
// Numeros infinitos
// Infinity, hace rteferencia a un valor numerico infinito y positivo (también existe un valor - Infinity para los infinitos negativos)

let numero3=0;
console.log(numero1/numero3);

// Si necesitamos recortar los decimales y redondear utilizaremos la funcion toFixed

// *********************************************************************************************************************************************************************************************************************

let decimales=65654.916464564;
console.log(decimales.toFixed(3)); // 3 decimales
console.log(decimales.toFixed(2)); // 2 decimales
console.log(decimales.toFixed(1)); // 1 decimal (Se puede poner cualquier numero)
console.log(decimales.toFixed()); //Redondeado (Si no se pone nada)

//EJERCICIO: lee un numero con decimal y devuelvelo convertido el . en ,
function cambiar(){
let numero=document.getElementById("numero").value;
console.log(numero);
let elementos=numero.split(".");
console.log(elementos);
let cadenaNumero=elementos[0]+ ","+elementos[1];//concatenado
let cadenaNumero2=elementos.join(",")
console.log(cadenaNumero);
console.log(cadenaNumero2);
document.getElementById("numeroDev").innerHTML=cadenaNumero;
}