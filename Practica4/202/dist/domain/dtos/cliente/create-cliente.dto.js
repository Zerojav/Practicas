"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteDto = void 0;
class CreateClienteDto {
    constructor(nombre, telefono, direccion, email, pedidos) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
        this.pedidos = pedidos;
    }
    static create(props) {
        const { nombre, telefono, direccion, email, pedidos } = props;
        if (!nombre)
            return ['nombre property is required', undefined];
        if (!telefono)
            return ['Telefono property is required', undefined];
        if (!direccion)
            return ['Direccion property is required', undefined];
        if (!email)
            return ['Email property is required', undefined];
        return [undefined, new CreateClienteDto(nombre, telefono, direccion, email, pedidos)];
    }
}
exports.CreateClienteDto = CreateClienteDto;
