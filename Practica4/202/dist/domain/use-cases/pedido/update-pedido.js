"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePedido = void 0;
class UpdatePedido {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateById(dto);
    }
}
exports.UpdatePedido = UpdatePedido;
