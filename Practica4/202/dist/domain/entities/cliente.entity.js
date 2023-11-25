"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEntity = void 0;
class ClienteEntity {
    constructor(id, nombre, telefono, direccion, email, pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
        this.pedidos = pedidos;
    }
    get Pedidos() {
        return this.pedidos;
    }
    static fromObject(object) {
        const { id, nombre, telefono, direccion, email, pedidos } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'Nombre is required';
        if (!telefono)
            throw 'Telefono is required';
        if (!direccion)
            throw 'Direccion is required';
        if (!email)
            throw 'Email is required';
        return new ClienteEntity(id, nombre, telefono, direccion, email, pedidos);
    }
}
exports.ClienteEntity = ClienteEntity;
