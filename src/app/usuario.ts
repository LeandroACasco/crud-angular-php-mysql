
export class Usuario {
    constructor(
        public user: string,
        public pass: string,
        public estado: number,
        public fecha: string,
        public hora: string,
        public personas_cod: number,
        public accesos_cod: number,
        public fechaingreso: string,
        public fechaegreso: string,
        public motivo: string,
        public usuarios_cod: number,
        public comisionventa: number,
        public comisioncobro: number,
        public sucursales_cod: number,
        public clavepermiso: string,
        public cod?: number,
    ) { }

}
