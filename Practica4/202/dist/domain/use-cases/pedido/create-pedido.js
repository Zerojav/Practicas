"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePedido = void 0;
// ctrl+ shift + l
class CreatePedido {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreatePedido = CreatePedido;
