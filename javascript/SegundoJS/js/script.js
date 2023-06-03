/*
1. Operadores de comparación
2. Operadores Lógicos - Y/O
    
*/

//Los operadores de comparación devuelven un resultado booleano true o false indicando si la comparación se cumple o no.

// compara si son iguales (==)
let x=2, y=3;
let resultado=(x==y);
document.getElementById("comp1").innerHTML=resultado;
//compara si son diferentes (!=)
resultado=(x!=y);
document.getElementById("comp2").innerHTML=resultado;
//comparar si un numero es mayor que otro (>)
resultado=(x>y);
document.getElementById("comp3").innerHTML=resultado;
//comparar si es mayor o igual a otro (>=)
resultado=(x>=y);
document.getElementById("comp4").innerHTML=resultado;
//comparar si es menor a otro (<)
resultado=(x<y)
document.getElementById("comp5").innerHTML=resultado;
//comparar si es menor o igual a otro (<=)
resultado=(x<=y)
document.getElementById("comp6").innerHTML=resultado;
//comparar si son iguales en contenido y en tipo de dato
let z="2"; // no es igual a x porque no son el mismo tipo de dato
resultado=(x===z)
document.getElementById("comp7").innerHTML=resultado;

// Operadores lógicos
// Operador y representado por &&
resultado=(x==y)&&(x===z); //false      false->false
document.getElementById("comp8").innerHTML=resultado;

resultado=(x==y)&&(x==z); //false      true->false
document.getElementById("comp9").innerHTML=resultado;

resultado=(x<y)&&(x==z); //true      true->true
document.getElementById("comp10").innerHTML=resultado;



// operador lógico OR y se representa con dos barras ||

resultado=(x==y)||(x===z); //false      false->false
document.getElementById("comp11").innerHTML=resultado;

resultado=(x==y)||(x==z); //false      true->true
document.getElementById("comp12").innerHTML=resultado;

resultado=(x<y)||(x==z); //true      true->true
document.getElementById("comp13").innerHTML=resultado;


//Operadores ternarios -> evaluar una condicion y si se cumple hace algo y si no se cumple se hace otra cosa

// Estructura: Expresión (?) valor o ejecucion si es verdadero (:) valor o ejecución si es falso
let muestra=x<y?"x es menor que y":"x Es mayor que y"; //El correcto siempre va primero y el falso el segundo.
document.getElementById("muestra").innerHTML=muestra;
