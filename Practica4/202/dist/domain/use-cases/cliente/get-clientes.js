"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientes = void 0;
class GetClientes {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return this.repository.getAll();
    }
}
exports.GetClientes = GetClientes;
