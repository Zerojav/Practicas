"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepartidor = void 0;
class UpdateRepartidor {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateById(dto);
    }
}
exports.UpdateRepartidor = UpdateRepartidor;
