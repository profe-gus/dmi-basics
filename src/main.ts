//import { edadGus, isActive, mensaje, nombre, resultadoEdad } from './01-basics/type-basics'
import './style.css'
//import * as conditionals from './01-basics/conditionals'
import * as loops from './01-basics/loops';
import { numerosPrimos } from './01-basics/objects';
//import { gustavoGonzalez } from './01-basics/classes-minify';
import { gustavoGonzalez } from './01-basics/classes';
import * as calificador from "./01-basics/reto"


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     ${nombre} ${edadGus}

//     ${resultadoEdad}

//     ${mensaje}

//     ${isActive}
//   </div>
// `


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${JSON.stringify(calificador.calificacionFinal.calificarEstudiante())}
  </div>
`