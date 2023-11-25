export class UpdateRepartidorDto{
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly telefono?: string,
        public readonly email?: string
    ) {}
    get values(){
        const returnObj: {[key: string]: any} = {};

        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.telefono) returnObj.telefono = this.telefono;
        if (this.email) returnObj.email = this.email;

        return returnObj;
    }
    static create(props: {
        id: number,
        nombre: string,
        telefono: string,
        email: string
    }): UpdateRepartidorDto {
        const {id, nombre, telefono, email} = props;

        if (nombre.length > 50) {
            throw new Error("El nombre del repartidor no puede tener más de 50 caracteres.");
        }
        if (telefono !== undefined && (isNaN(Number(telefono)) || telefono.toString().length !== 10)) {
            throw new Error("El teléfono debe tener exactamente 10 dígitos.");
        }

        return new UpdateRepartidorDto(id, nombre, telefono, email);
    }
}