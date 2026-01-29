export let nombre:string = "Gus";
export let edadGus:number =34
export let edadCami:number =30

export let resultadoEdad=edadGus+edadCami;

const estudiante: string = "Jorge";

nombre = 'Luis';

export const mensaje:string = `
Esto es un template string
me permite aqui agregar una linea mas de texto
me permite concatenar valores: ${nombre}
Me permite realizar operaciones ${1+1}
`;
//estudiante = "Gus"; Las constantes no cambian su valor.

console.log(mensaje)

export const isActive:boolean = false;