"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteDto = void 0;
class UpdateClienteDto {
    constructor(id, nombre, telefono, direccion, email) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.direccion)
            returnObj.direccion = this.direccion;
        if (this.email)
            returnObj.email = this.email;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, telefono, direccion, email } = props;
        if (nombre !== undefined && nombre.length > 50) {
            throw new Error("El nombre del cliente no puede tener más de 50 caracteres.");
        }
        if (telefono !== undefined && (isNaN(Number(telefono)) || telefono.toString().length !== 10)) {
            throw new Error("El teléfono debe tener exactamente 10 dígitos.");
        }
        return new UpdateClienteDto(id, nombre, telefono, direccion, email);
    }
}
exports.UpdateClienteDto = UpdateClienteDto;
