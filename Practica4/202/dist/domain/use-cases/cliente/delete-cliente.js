"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCliente = void 0;
class DeleteCliente {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteById(id);
    }
}
exports.DeleteCliente = DeleteCliente;
