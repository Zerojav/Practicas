"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorEntity = void 0;
class RepartidorEntity {
    constructor(id, nombre, telefono, email, pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.pedidos = pedidos;
    }
    get Pedidos() {
        return this.pedidos;
    }
    static fromObject(object) {
        const { id, nombre, telefono, email, pedidos } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'Nombre is required';
        if (!telefono)
            throw 'Telefono is required';
        if (!email)
            throw 'Email is required';
        return new RepartidorEntity(id, nombre, telefono, email, pedidos);
    }
}
exports.RepartidorEntity = RepartidorEntity;
