"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepartidorDto = void 0;
class CreateRepartidorDto {
    constructor(nombre, telefono, email, pedidos) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.pedidos = pedidos;
    }
    static create(props) {
        const { nombre, telefono, email, pedidos } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!telefono)
            return ['Telefono property is required', undefined];
        if (!email)
            return ['Email property is required', undefined];
        return [undefined, new CreateRepartidorDto(nombre, telefono, email, pedidos)];
    }
}
exports.CreateRepartidorDto = CreateRepartidorDto;
