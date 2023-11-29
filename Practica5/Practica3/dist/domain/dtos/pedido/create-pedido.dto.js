"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePedidoDto = void 0;
class CreatePedidoDto {
    constructor(idCliente, idRepartidor) {
        this.idCliente = idCliente;
        this.idRepartidor = idRepartidor;
    }
    static create(props) {
        const { idCliente, idRepartidor } = props;
        return new CreatePedidoDto(idCliente, idRepartidor);
    }
}
exports.CreatePedidoDto = CreatePedidoDto;
