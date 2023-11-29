export class CreateRepartidorDto{
    private constructor(
        public readonly nombre: string,
        public readonly telefono: string,
        public readonly email: string
    ){}
    static create(props: {
        nombre: string,
        telefono: string,
        email: string
    }):
    CreateRepartidorDto{
        const {nombre, telefono, email} = props;
        if (nombre.length > 50) {
            throw new Error("El nombre del repartidor no puede tener más de 50 caracteres.");
        }
        if (!!isNaN(Number(telefono)) || telefono.toString().length !== 10) {
            throw new Error("El teléfono debe ser un número y tener exactamente 10 dígitos.");
        }
        return new CreateRepartidorDto(nombre, telefono, email);
    }
}