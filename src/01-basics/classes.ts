class Estudiante {
    nombre:string;
    identificacion:string;
    edad:number;
    activo:boolean;
    constructor(nombre:string, identificacion: string, edad: number, activo: boolean){
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.edad = edad;
        this.activo = activo
    }
}

export const gustavoGonzalez = new Estudiante("Gus", "1144150238", 34, false);


class Vivienda {
    private medidas: number = 0;
    private estrato: number = 0;
    private barrio: string = "";
    private direccion: string = "";


    public establecerMedidas(medidas:number){
        this.medidas = medidas
    }

    public obtenerMedidas(){
        return this.medidas
    }

}

const apto503 = new Vivienda();
apto503.establecerMedidas(64);
console.log("El apartamento 503 tiene", apto503.obtenerMedidas(), "mts2");