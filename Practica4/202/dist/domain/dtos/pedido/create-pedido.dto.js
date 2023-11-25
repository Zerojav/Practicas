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
        if (!idCliente)
            return ['idCliente property is required', undefined];
        if (!idRepartidor)
            return ['idRepartidor property is required', undefined];
        return [undefined, new CreatePedidoDto(idCliente, idRepartidor)];
    }
}
exports.CreatePedidoDto = CreatePedidoDto;
