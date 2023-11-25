"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCliente = void 0;
class GetCliente {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetCliente = GetCliente;
