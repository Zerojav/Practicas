export class CreateClienteDto{
    private constructor(
        public readonly nombre: string,
        public readonly telefono: string,
        public readonly direccion: string,
        public readonly email: string
    ){}
    static create(props: {
        nombre: string,
        telefono: string,
        direccion: string,
        email: string
    }):
    CreateClienteDto {
        const {nombre, telefono, direccion, email} = props;
        if (nombre.length > 50) {
            throw new Error("El nombre del cliente no puede tener más de 50 caracteres.");
        }
        if (!!isNaN(Number(telefono)) || telefono.toString().length !== 10) {
            throw new Error("El teléfono debe ser un número y tener exactamente 10 dígitos.");
        }

        return new CreateClienteDto(nombre, telefono, direccion, email);
    }
}