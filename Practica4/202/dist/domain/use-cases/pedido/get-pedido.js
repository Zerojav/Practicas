"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPedido = void 0;
class GetPedido {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetPedido = GetPedido;
