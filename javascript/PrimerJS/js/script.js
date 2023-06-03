/*
    Este script enseña:
        1. Comentarios
        2. Insertar codigo HTML con document.getElementById.innerHTML
        3. Leer codigo desde HTML con document.getElementById.value
        4. Declarar Variables - Tipos de variables
        5. Asignar valores variables
        6. Mostrar en la consola del navegador salidas -> console.log
        7. Crear operaciones matematicas básicas.
        8. Declarar una función (básico)
        9. Llamar una función desde HTML (báscio) / Llamar una función desde javascript (básico) -> miFuncion()
        10. Convertir un valor de cadena a uno entero con (parseInt)
        11. Incremento y decremento de un valor con ++ --
        12. Declarar constantes.
        13. Caracteres de escape en cadena de caracteres
        14. Alertas
        15. Document.write
*/



//comentarios de linea
/*
Comentarios de bloque
*/
//alert("Hola Mundo de Desarrollo Web");

//acceder a los elementos por id del html
//1. crear una variable -> Un lugar en memoria donde se almacena un valor
//  1.1 declarar la variable indicando un nombre -(comenzar: letras, no numero ,no caracerteres especiales, $-> php comienza) debe ser en minuscula o camello -> nombreDelUsuario. No debe contener espacios (no-> nombre del usuario)
//Se puede utilizar barra baja _ tanto en el comienzo como en el contenido del nombre. Una buena practica es comenzar con letras o con $

let nombre="Ana Romero"; //Las comillas indican que es una cadena de caracteres
//declaramos una variable llamada parrafo que se enlaza con el id del HTML
let parrafo=document.getElementById("parrafo"); 
//Le indicamos a esa variable que inserte el valor de la otra variable
parrafo.innerHTML=nombre;
//console.log-> es una instruccion que se muestra en la consola del navegador
console.log(nombre)

document.getElementById('demo').innerHTML='Hello JavaScript'

// variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido='De Ávila Gallego';
//reemplazo el valor de nombre concatenando con el apellido
nombre=nombre+" "+apellido;
console.log(nombre);
document.getElementById('nuevoNombre').innerHTML=nombre;
// caracteristicas de javascript ... no declaras el tipo de dato

numero1='uno';
suma=numero1+' '+numero2;
console.log(suma); // es una manera de visualizar una salida en javascript

//crear mi primera funcion-> una serie de instrucciones que se ejecutarán cuando sea llamada

// La siguiente funcion muestra una alerta e inserta un párrafo en el lugar donde se identifica parrafo 2

function mostrarAlerta(){
    alert("Si aceptas, saldrá un lorem");
    document.getElementById('parrafo2').innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident nostrum, autem excepturi illum dolorem sunt voluptatibus. Odit, possimus laborum totam aut dolor quibusdam omnis perferendis illum quisquam magnam architecto.';
}
//Otra manera de llamarlo-> Escucha de evento

/*document.getElementById('boton1').onclick=function(){
           alert('Hey alerta Wey!:)')
}*/
/* Paso de parametros a una funcion */
function sumar2(){
    //leemos del formulario los valores que se ingresen
    //casting-> cambiar de un tipo a otro... caracteres-> numeros
    let x=parseInt(document.getElementById("numero1").value);
    let y=parseInt(document.getElementById("numero2").value);

    document.getElementById("suma2").innerHTML="El valor de X es "+x+" El valor de Y es "+y+" y la suma de estos dos valores es "+(x+y);
    
}

// pase de parametros
document.getElementById('resultado1').innerHTML=resultado1(45,34)
function resultado1(a,b){
    return a+b;
}

//existe otra manera de declarar las variables <2015

var nombreAlumno="Rosa Huertas";
console.log(nombreAlumno);

// diferencia entre var y let
//1. Se puede volver a declarar la misma variable
var nombreAlumno="José Martinez";
console.log(nombreAlumno);
// Ejemplo con let
let nombrePadre="Miguel García";
console.log(nombrePadre);
// 2. No se puede declarar de nuevo una variable con let en el mismo bloque de código
function otroNombre(){
    let nombrePadre="Gonzalo León";
    console.log("Dentro de la funcion ->"+nombrePadre);
}
otroNombre();//llamamos a la funcion para que se ejecute
console.log("Fuera de la funcion->"+nombrePadre);

//En la declaración de las variables se puede declarar 1 o más variables en la misma linea
let nombreMadre="Sofia Luna",nombreNino="Fiona Martinez",colegio="Cervantes";

//las variables no estas obligado a declararlas, pero es importante y buena práctica.
edad=15; //Tipo entero
console.log(edad);
precio=5.8; //decimal

/* 
Lo que hay en una variable puede ser de varios tipos:
    tipos-> números (5,4,5.8, etc)
            cadena de caracteres("cadena")
            booleanos(true, false)
*/

let miBooleano=true; //on/off- 0/1
//las cadenas de caracteres existe la limitante de utilizar "" dentro de una cadena
let cadena="esta es una cadena \"Hola\" \\de javascript\\"
console.log(cadena);
// puedes combinar las dobles comillas con las comillas simples y a la inversa
let cadena2='Esta es "una cadena" de javascript'
console.log(cadena2);
cadena2="Esta es 'una cadena' de javascript"
console.log(cadena2);
//salto de linea con caracteres de escape
cadena="Esta es 'una cadena' \nde javascript";
console.log(cadena2);

/*Operadores matemáticos
    +-* /-> operaciones básicas
    % -> el resto de la division de dos numeros

*/

x=10;
y=2;
let modulo=x%y; //da como resultado el resto de la division
console.log("El resto entre 10 y 2 es "+modulo)
y=3
let operacion=(x+2)*2-(y/3)
console.log(operacion);

/*
operadores de asignación
    =  asigna
    += incrementa el número -> En vez de (x=x+2)
    -=
    /=
    *=
*/

x+=2; //x=12
console.log(x);
x-=2; // x=10
console.log(x);
x*=2; // x=20
console.log(x);
x/=2; // x=10
console.log(x);

//se puede yutilizar el operador de asignación += en las cadenas de caracteres

cadena+=cadena2;
console.log(cadena);

//Operador de exponencial (exponente)
x=y**10
console.log(x);
//Operador de incremento
++y;
console.log(y);
//Operador decremento
--y;
//salida en pantalla directamente insertando el texto en la ultima linea disponible.
document.write("El valor de y es "+y);
/*
        -constantes-
    No cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada

    Palabras reservadas(palabras clave)= Propias del lenguaje ¨(let,var,const...)

    Se debe escribir en mayusculas
*/

const PI=3.141618; //las constantes se declaran en mayusculas
const MONEDA=5;
//area de un circulo    area=r**2*PI
let area= (50**2)*PI;
console.log(area);

