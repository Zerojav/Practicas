export class UpdateClienteDto{
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly telefono?: string,
        public readonly direccion?: string,
        public readonly email?: string
    ){}
    get values(){
        const returnObj: {[key: string]: any} = {};

        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.telefono) returnObj.telefono = this.telefono;
        if (this.direccion) returnObj.direccion = this.direccion;
        if (this.email) returnObj.email = this.email;

        return returnObj;
    }
    static create(props: {
        id: number,
        nombre: string,
        telefono: string,
        direccion: string,
        email: string
    }): UpdateClienteDto {
        const {id, nombre, telefono, direccion, email} = props;
        
        if (nombre !== undefined && nombre.length > 50) {
            throw new Error("El nombre del cliente no puede tener más de 50 caracteres.");
        }

        if (telefono !== undefined && (isNaN(Number(telefono)) || telefono.toString().length !== 10)) {
            throw new Error("El teléfono debe tener exactamente 10 dígitos.");
        }

        return new UpdateClienteDto(id, nombre, telefono, direccion, email);
    }
}