"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteDto = void 0;
class UpdateClienteDto {
    constructor(id, nombre, telefono, direcciones, email, pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direcciones = direcciones;
        this.email = email;
        this.pedidos = pedidos;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.direcciones)
            returnObj.direcciones = this.direcciones;
        if (this.email)
            returnObj.email = this.email;
        if (this.pedidos)
            returnObj.pedidos = this.pedidos;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, telefono, direcciones, email, pedidos } = props;
        let newName = telefono;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!nombre && !telefono && !direcciones && !email && !pedidos) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateClienteDto(id, nombre, telefono, direcciones, email, pedidos)];
    }
}
exports.UpdateClienteDto = UpdateClienteDto;
