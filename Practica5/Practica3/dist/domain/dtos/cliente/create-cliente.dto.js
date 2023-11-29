"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteDto = void 0;
class CreateClienteDto {
    constructor(nombre, telefono, direccion, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
    }
    static create(props) {
        const { nombre, telefono, direccion, email } = props;
        if (nombre.length > 50) {
            throw new Error("El nombre del cliente no puede tener más de 50 caracteres.");
        }
        if (!!isNaN(Number(telefono)) || telefono.toString().length !== 10) {
            throw new Error("El teléfono debe ser un número y tener exactamente 10 dígitos.");
        }
        return new CreateClienteDto(nombre, telefono, direccion, email);
    }
}
exports.CreateClienteDto = CreateClienteDto;
