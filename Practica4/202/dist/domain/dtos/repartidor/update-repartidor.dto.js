"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepartidorDto = void 0;
class UpdateRepartidorDto {
    constructor(id, nombre, telefono, email, pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.pedidos = pedidos;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.email)
            returnObj.email = this.email;
        if (this.pedidos)
            returnObj.pedidos = this.pedidos;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, telefono, email, pedidos } = props;
        let newName = telefono;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!nombre && !telefono && !email && !pedidos) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateRepartidorDto(id, nombre, telefono, email, pedidos)];
    }
}
exports.UpdateRepartidorDto = UpdateRepartidorDto;
