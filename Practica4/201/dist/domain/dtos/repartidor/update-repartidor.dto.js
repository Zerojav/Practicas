"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepartidorDto = void 0;
class UpdateRepartidorDto {
    constructor(id, nombre, telefono, email) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.email)
            returnObj.email = this.email;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, telefono, email } = props;
        if (nombre.length > 50) {
            throw new Error("El nombre del repartidor no puede tener más de 50 caracteres.");
        }
        if (telefono !== undefined && (isNaN(Number(telefono)) || telefono.toString().length !== 10)) {
            throw new Error("El teléfono debe tener exactamente 10 dígitos.");
        }
        return new UpdateRepartidorDto(id, nombre, telefono, email);
    }
}
exports.UpdateRepartidorDto = UpdateRepartidorDto;
