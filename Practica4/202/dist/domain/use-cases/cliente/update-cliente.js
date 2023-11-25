"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCliente = void 0;
class UpdateCliente {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateById(dto);
    }
}
exports.UpdateCliente = UpdateCliente;
