function ejemplo1() {
    let caracteres = document.getElementById("ejemplo1").value;
    if (caracteres != "") {

        let mensaje = `ingreso: ${caracteres} - tiene ${caracteres.length} caracteres:\n`;
        for (let index = 0; index < caracteres.length; index++) {
            mensaje = `${mensaje}${index + 1}:${caracteres[index]}\n`;

        }
        mesage(mensaje);
    }
    else {
        mesage("Debe ingresar un texto");
    }
}
function ejemplo2() {
    let palabra = "1";
    let contador = 0;
    let palabrasIngresadas = "";
    while (palabra != "" && palabra != null) {
        palabra = prompt("ingrese una palabra (para salir cancelar o aceptar sin texto)")
        if (palabra != "" && palabra != null) {
            contador++;
            palabrasIngresadas = palabrasIngresadas + `${contador} : ${palabra}\n`;
        }
    }
    mesage("Cantidad de palabaras ingresadas:" + contador + "\n" + palabrasIngresadas);
}

function ejemplo3() {
    let palabra;
    let contador = 0;
    let palabrasIngresadas = "";

    do {
        palabra = prompt("ingrese una palabra (para salir cancelar o aceptar sin texto)")
        if (palabra != "" && palabra != null) {
            contador++;
            palabrasIngresadas = palabrasIngresadas + `${contador} : ${palabra}\n`;
        }
    } while (palabra != "" && palabra != null);
    mesage("Cantidad de palabaras ingresadas:" + contador + "\n" + palabrasIngresadas);
}
function ejemplo4() {
    let key = document.getElementById("ejemplo4").value;
    switch (key) {
        case "1":
            mesage("Eligio el UNO");
            break;
        case "2":
            mesage("Eligio el DOS");
            break;
        case "3":
            mesage("Eligio el TRES");
            break;
        case "4":
            mesage("Eligio el CUATRO");
            break;
        case "5":
            mesage("Eligio el CINCO");
            break;
        case "6":
            mesage("Eligio el SEIS");
            break;
        case "7":
            mesage("Eligio el SIETE");
            break;
        case "8":
            mesage("Eligio el OCHO");
            break;
        case "9":
            mesage("Eligio el NUEVE");
            break;
        case "10":
            mesage("Eligio el DIEZ");
            break;
        default:
            mesage("Valor ingresado es incorrecto");
            break;
    }

}

function mesage(mensaje) {
    if (document.getElementById("alert").checked) {
        alert(mensaje);
    }
    if (document.getElementById("console").checked) {
        console.log(mensaje);
    }
}