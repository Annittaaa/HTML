/*
Estructuras de control de flujo
--------------------------------------------------------------------------------------------
Bucle for: la estructura for permite realizar repeticiones:
    for(inicializacion;condicion;incremento){
        (funcion)
    }
*/
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");

/*
La idea del funcionamiento de un bucle for es la siguiente: "Mientras la condicion se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro de for. Además, despues de cada repetición, actualiza el valor de las variables que se utilizan en la condición".
*/

//ejemplo de bucle con los diferentes <hx></hx> de HTM
function salidaH(){
    for(let i=1;i<=6;i++){
    document.write("<h"+i+">"+"Encabezado de nivel "+i+"</h"+i+">")
    }
}
/*ejemplo de valor factorial
    El factorial de un numero entero "n" es una operación matemática que consiste en multiplicar todos los factores "n x (n-1) x (n-2) x ... x 1". Así el factorial de 5 (escrito como 5!) es igual a 5!= 5 x
    Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
*/
function calFact(){
    let numero=document.getElementById("numero").value;
    //verificar que lee correctamente el numero
    console.log(numero)
    document.getElementById("msnError").innerHTML="";
    if(isNaN(numero)){ //si no es un numero
           //ha cometido un error al introducir el numero
        let msnError="Indica un número, no letras ni caracteres especiales!!";
        document.getElementById("msnError").innerHTML=msnError;
    }
    else{
        //hacemos el bucle factorial
        let resultado=1; //se inicializa en 1
        //bucle
        for(let i=1; i<=numero;i++){
            resultado*=i;
        }
        document.getElementById("resultadoFact").innerHTML=resultado;

    }
}

// Estructura for ... in : Una estructura de control derivada de for  es la estructura for...
function mostrarmeses(){
    let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let etiqueta;
    for(i in mes){
        etiqueta="etiqueta"+i
        document.getElementById(etiqueta).innerHTML="Mes de "+mes[i]
    }
}