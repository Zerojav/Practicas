"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoEntity = void 0;
class PedidoEntity {
    constructor(id, idCliente, idRepartidor, fechaPedido) {
        this.id = id;
        this.idCliente = idCliente;
        this.idRepartidor = idRepartidor;
        this.fechaPedido = fechaPedido;
    }
    static fromObject(object) {
        const { id, idCliente, idRepartidor, fechaPedido } = object;
        if (!id)
            throw 'Id is required';
        if (!idCliente)
            throw 'idCliente is required';
        if (!idRepartidor)
            throw 'idRepartidor is required';
        if (!fechaPedido)
            throw 'fechaPedido ID is required';
        return new PedidoEntity(id, idCliente, idRepartidor, fechaPedido);
    }
}
exports.PedidoEntity = PedidoEntity;
