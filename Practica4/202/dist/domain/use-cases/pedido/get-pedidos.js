"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPedidos = void 0;
class GetPedidos {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return this.repository.getAll();
    }
}
exports.GetPedidos = GetPedidos;
