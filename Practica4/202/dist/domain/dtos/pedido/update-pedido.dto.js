"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePedidoDto = void 0;
class UpdatePedidoDto {
    constructor(id, idCliente, idRepartidor, fechaPedido) {
        this.id = id;
        this.idCliente = idCliente;
        this.idRepartidor = idRepartidor;
        this.fechaPedido = fechaPedido;
    }
    get values() {
        const returnObj = {};
        if (this.idCliente)
            returnObj.idCliente = this.idCliente;
        if (this.idRepartidor)
            returnObj.idRepartidor = this.idRepartidor;
        if (this.fechaPedido)
            returnObj.fechaPedido = this.fechaPedido;
        return returnObj;
    }
    static create(props) {
        const { id, idCliente, idRepartidor, fechaPedido } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!idCliente && !idRepartidor && !fechaPedido) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdatePedidoDto(id, idCliente, idRepartidor, fechaPedido)];
    }
}
exports.UpdatePedidoDto = UpdatePedidoDto;
