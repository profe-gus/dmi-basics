class Estudiante{
    constructor(
        public nombre:string, 
        public identificacion: string, 
        public edad:number, 
        public activo:boolean){}
}

export const gustavoGonzalez = new Estudiante("Gus", "1234567890", 34, true);