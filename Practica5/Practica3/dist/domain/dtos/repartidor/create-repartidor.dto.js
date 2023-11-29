"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepartidorDto = void 0;
class CreateRepartidorDto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
    static create(props) {
        const { nombre, telefono, email } = props;
        if (nombre.length > 50) {
            throw new Error("El nombre del repartidor no puede tener más de 50 caracteres.");
        }
        if (!!isNaN(Number(telefono)) || telefono.toString().length !== 10) {
            throw new Error("El teléfono debe ser un número y tener exactamente 10 dígitos.");
        }
        return new CreateRepartidorDto(nombre, telefono, email);
    }
}
exports.CreateRepartidorDto = CreateRepartidorDto;
