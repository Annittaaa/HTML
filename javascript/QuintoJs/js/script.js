/*
* if- else -> Tambien existe otra estructura de control de flujo switch-case
* Su funcion es segun el parametro o valor que contenga, puede realizar una serie de acciones
* Ej:
switch (expression){
    case x;
    //code block
    break; //para salir del switch y no seguir evaluando los siguiente casos
    case y: 
    //code block
    break;
    default: 
    //code block
}
*
Así es como funciona:

La expresion de cambio se evalua una vez.
el valor de la expresion se compara con los valores de cada caso.
Si hay una coincidencia, se ejecuta el bloque de codigo asociado.
Si no hay ninguna coincidencia, se ejecuta el bloque de codigo prederminado (default).

*/
//Ejemplo sencillo

let dias=new Date().getDay();

console.log(dias);
let dia;
switch(dias){
    case 1:
        dia="Lunes"
        break; //salga del switch

    case 2:
        dia="Martes"
        break;

    case 3:
        dia="Miercoles"
        break;

    case 4:
        dia="Jueves"
        break;

    case 5:
        dia="Viernes"
        break;

    case 6:
    case 7:
        dia="Fin de Semana"
        break;

    default:
        dia="Ese día no existe";
}
document.getElementById("dias").innerHTML=dia;

/*
Ejercicio:
De  la base de la puntuacion numerica de los alumnos indicamos que del 0 al 4 -> Insuficiente
5 al 6 -> Bien
7 al 8 -> Notable
9 al 10 -> Sobresaliente
*/


function decir(){
let nota=parseInt(document.getElementById("respuesta").value);
let notaf;
switch(nota){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        notaf="Insuficiente"
        break;

    case 5:
        notaf="Suficiente"
        break;
    case 6:
        notaf="Bien"
        break;

    case 7:
    case 8:
        notaf="Notable"
        break;

    case 9:
    case 10:
        notaf="Sobresaliente"
        break;

    default:
        notaf="Eso no es posible";
}
document.getElementById("nota").innerHTML=notaf;
}
 /*
 Ejercicio: mostrar en consola los numeros del 1 al 20 de mayor a menor
 */
for(let i=20;i>0;i=i-2){
    console.log(i);
}

//bucle for each ->
 function cambiarColor(){
 let colores=["#f7b7f7","#001100","red","#000000","#d8d5d6","#f7b7f7"]

let indice=parseInt(document.getElementById("numero").value);
--indice;

for (let i=0;i<colores.length;i++){
    if(i==indice){
        // i contiene el indice del elemento en el array
        //cambiar el color a el div caja
        document.getElementById("caja").style.backgroundColor=colores[i];
        document.getElementById("dias").style.color=colores[i];
        document.getElementById("nota").style.color=colores[i];
     }
    }
    //recorrer el array con for of
    for(let i of colores){
        //recorremos todos los elementos del array
        document.getElementById("caja2").style.backgroundColor=i;
        document.getElementById("caja2").style.transition="width 2s, heigth 2s, transform 2s";
        document.getElementById("caja2").style.transform="rotate(180deg)";

    }
    //transition-property: width;
    //transition-duration: 2s;
    //transition-property; heigth;
    //transition-delay: 2s;
}


