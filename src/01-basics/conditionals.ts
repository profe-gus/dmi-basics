const numero1: number = 27;
const numero2: number = 24;

if (numero1 > numero2) {
    console.log("El numero1 es mayor");
} else {

    if (numero1 < numero2) {
        console.log("El numero2 es mayor")
    } else {
        console.log("Los numeros son iguales")
    }

}

const nota = 7;

if (nota >= 3.0 && nota <= 5.0) {
    console.log("Aprobaste!")
} else {
    if (nota < 3.0 && nota >= 0) {
        console.log("Reprobaste!")
    } else {
        console.log("Calificacion invalida, por favor verifica los valores")
    }
}

if (nota >= 3.0 && nota <= 5.0) console.log("Aprobaste")
if (nota < 3.0 && nota >= 0) console.log("Reprobaste")
if (nota > 5 || nota < 0) console.log("Calificacion invalida, por favor verifica los valores")

nota > 5 || nota < 0 ? console.log("Calificacion invalida, por favor verifica los valores") : console.log("revisa tu codigo porque algo paso")
nota >= 3.0 && nota <= 5.0 ? console.log("Aprobaste") : console.log("Reprobaste")

let dia:any = 1;
dia = prompt("Ingrese un numero de dia del 1 al 7");
let diaSeleccionado = Number(dia);///+dia
let nombreDia: string;

switch (diaSeleccionado) {
    case 1:
        nombreDia = "Domingo";
        break;
    case 2:
        nombreDia = "Lunes";
        break;
    case 3:
        nombreDia = "Martes";
        break;
    case 4:
        nombreDia = "Miercoles";
        break;
    case 5:
        nombreDia = "Jueves";
        break;
    case 6:
        nombreDia = "Viernes";
        break;
    case 7:
        nombreDia = "Sabado";
        break;
    default:
        nombreDia = "Dia invalido";
        break;
}

console.log("El dia seleccionado es: ", nombreDia)