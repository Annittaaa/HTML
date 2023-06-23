/*

Bucles While

while(condicion){ ** se repite mientras la condicion sea true
    //bloque de codigo
    
}
*/
//Ejemplo : mostrar en la consola los numeros del 1 al 15

//Cuando se trabaja con numeros u otro elemento, tenemos que evaluar o buscar la manera que salga del bucle, si no se queda en bucle infinito.
function primerWhile(){
        let num=0;
        while(num<=15){
            console.log(num);
            //si no se incrementa el valor de num, el bucle nunca termina
            num++;
        }
        let interruptor=false;
        while(!interruptor){
            console.log(interruptor);
            let a="Maria", b="Juan"
            // si no cambio el valor de interruptor a true, el bucle nunca termina

            if(a !=b){
                interruptor=true;
                console.log(interruptor);
            }
        }
}
function arraysWhile(){
        //declaramos una constante tipo array demarcaCoches
        const cars=["BMW","Volvo","Audi","Ford" ];
        //Indice que nos va a permitir salir del bucle
        let i=0;
        //Texto que mostrará con todos los valores segun vaya recorriendo el bucle
        let text=""; // inicializa la variable text en blanco o vacía.

        while (cars[i]){
            text += cars[i]+ " ";
            console.log(text);
            i++;
        }
}
function cadenaWhile(){
        let text2=" ";
        while(text2==" " || text2 == null){
            text2=prompt("Escribe un nombre");
            console.log(text2);
        }
        alert("Salió del bucle!");
}
//Ejercicio: Lee un número hasta que de par, sigue leyendo!
function numeroParWhile() {

        let num;
        // Aqui en la condicion esta que es lo que le estas diciendo??
        while(num%2!=0 || num==null){
            num=prompt("Escribe un numero par")
            console.log(num);
        }
        console.log("salio del bucle");
        alert("salio del bucle!")
}

//Bucle do While: hacer mientras..
//Es igual a while, con la diferencia que siempre se ejecuta al menos 1 vez
/* do{
    //bloue de instrucciones...
}while(condicion);

Ejemplo: Pedimos al usuario que escriba el nombre "Maria"y mientras no lo haga lo vuelve a pedir
*/
function nombreDoWhile(){
    let nombre='';
    do{
        nombre=prompt("Adivina el nombre");
    }while(nombre !='Maria');
    alert("HAS ACERTADO!")
}
function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text +="El numero es " + i;
        console.log(text);

    }while(i<text);
    console.log("Salio del bucle");
   
}
