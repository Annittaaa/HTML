/*
    *Matrices o vectores -> Arrays (Arreglos)

*/
/*
    *La declaracion de variables aisladas como por ejemplo los dias de la semana

*/
let dia1="lunes"
let dia2="Martes"

/*

    *Aunque la declaracion anterior es correcta, es mas eficiente cuando tenemos una coleccion de datos que cuardan relación, crear arrays

    *sintaxis de un array
    * let nombre_array=[Valor1,valor2,...valorn]
*/

let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

/*
    *Aspectos importantes para el uso de Array
    1. Cada elemento tiene un indice
    2. Los indices comienzan en 0
    3. Para acceder a un elemento lo tengo que llamar con el nombre del array y su indice-> dias[0]->Lunes
    4. Puedo conocer el numero de elementos de un Array.
*/
document.getElementById("misalida").innerHTML=dias[0]
document.getElementById("misalida2").innerHTML=dias[6]

/*Ejercicio: Realiza un array con los meses del año y muestra por pantalla al menos 3 meses de verano*/

let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
document.getElementById("mes1").innerHTML=mes[9]
document.getElementById("mes2").innerHTML=mes[7]
document.getElementById("mes3").innerHTML=mes[11]
document.getElementById("mes4").innerHTML=mes[0]

/* A partir del siguiente array que se proporciona*/

let valores=[true, 5, false, "hola", "adios", 2]

/*Determinar cual de los dos elementos numericos es mayor utikizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

    */

//operadores ternarios
let resultado1=valores[1]>valores[5]?valores[0]:valores[2]
document.getElementById("resultado1").innerHTML="El resultado es "+resultado1

//operadores logicos
let resultado2=valores[0] || valores[2];
// true || false-> true
document.getElementById("resultado2").innerHTML="El resultado es "+resultado2

let resultado3=valores[0] && valores[2];
// true || false-> false
document.getElementById("resultado3").innerHTML="El resultado es "+resultado3

//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos númericos

let resultado4=valores[1]+valores[5] //suma
let resultado5=valores[1]-valores[5] //resta
let resultado6=valores[1]*valores[5] //multiplicacion
let resultado7=valores[1]/valores[5] //division
let resultado8=valores[1]%valores[5] //resto
document.getElementById("resultado4").innerHTML="El resultado es "+resultado4
document.getElementById("resultado5").innerHTML="El resultado es "+resultado5
document.getElementById("resultado6").innerHTML="El resultado es "+resultado6
document.getElementById("resultado7").innerHTML="El resultado es "+resultado7
document.getElementById("resultado8").innerHTML="El resultado es "+resultado8

/*Condicional if-else*/
let edad=18;
if(edad>=18){ //Si se cumple la condición
    //Grupo de instrucciones
    let mensaje="ya puedes ir a la disco"
    ++edad;
    let cumple= "el año que viene tendras" + edad;
}else{ //Si no se cumple la condicion
    let mensaje="Espera un poco"
}

/*
()->Parte de la sintaxis del lenguaje, para evaluar la condición
{}-> Grupo de instrucciones
[]->Los arrays
*/