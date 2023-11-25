"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCliente = void 0;
// ctrl+ shift + l
class CreateCliente {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateCliente = CreateCliente;
