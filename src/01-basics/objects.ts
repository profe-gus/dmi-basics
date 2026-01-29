export const numerosPrimos:number[] = [2,3,5,7,11,13,17,19];

console.log(numerosPrimos)

numerosPrimos.push(23);
numerosPrimos[3]=8
console.log(numerosPrimos)

numerosPrimos.forEach(numero => console.log(numero))

const numerosFiltrados = numerosPrimos.filter(numero => numero > 10);
console.log(numerosFiltrados)

// Objects

const estudiante = {
    nombre: "Gus",
    carrera: "Ing informatica",
    edad: 34,
    identificacion: "1234567890",
    activo: true,
    direccion: "calle falsa 1223"
}

console.log(estudiante.nombre)

interface IEstudiante {
    nombre:string;
    carrera:string;
    edad:number;
    identificacion:string;
    activo:boolean
}

const gustavoGonzalez: IEstudiante = {
    nombre: "Gus",
    carrera: "ing soft",
    edad: 34,
    identificacion: "1234556679",
    activo: true,
}
console.log(gustavoGonzalez)

const usuario = {
    estudiante: gustavoGonzalez,
    usuario: "Gugo2025",
    password: "12345"
}

console.log(usuario)