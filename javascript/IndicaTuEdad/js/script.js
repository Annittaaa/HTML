function edad() {
    let edadRecogida = document.getElementById("edad").value;
    if (edadRecogida == "") {
        let edadMensaje = "Introduce tu edad ceporro";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida <= 0) {
        edadMensaje = "Todavia no has nacido mongolo";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida < 18) {
        edadMensaje = "Es menor de edad illo";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 18 && edadRecogida <= 20) {
        edadMensaje = "Eres mayor de edad";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 21 && edadRecogida <= 24) {
        edadMensaje = "Eres mayor de edad en EE.UU";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida == 25) {
        edadMensaje = "Puedes empezar a financiar un coche";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 26 && edadRecogida <= 65) {
        edadMensaje = "Te estas haciendo viejo";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida > 65 && edadRecogida < 110) {
        edadMensaje = "JUBILATE YA ANDA";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 110 && edadRecogida < 119) {
        edadMensaje = "Eres el más viejo del mundo";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    
    }else if(isNaN(edadRecogida)){
        edadMensaje="Escribe una edad valida";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else {
        edadMensaje = "Eres un vampiro tio";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    }
};