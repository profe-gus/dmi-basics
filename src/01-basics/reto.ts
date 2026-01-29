class Calificador {
    nombreEstudiante:string;
    materia:string
    calificacion:number;

    constructor(nombreEstudiante:string, materia:string, calificacion:number){
        this.nombreEstudiante = nombreEstudiante;
        this.materia= materia;
        this.calificacion = calificacion;
    }

    public calificarEstudiante(){
        let mensaje:string = ""
        if(this.calificacion >= 3.0 && this.calificacion <+ 5.0){
            mensaje = "Nuestro muchacho aprobo";
        }else{
            if(this.calificacion < 3.0 && this.calificacion >= 0){
                mensaje = "Nuestro muchacho reprobo";
            }else{
                mensaje ="Error al digitar la calificacion";
            }
        }
        return mensaje;
    }
}

export const calificacionFinal = new Calificador("Gus", "DMI", 1);
console.log(calificacionFinal.calificarEstudiante())