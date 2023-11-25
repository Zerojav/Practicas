"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRepartidor = void 0;
class DeleteRepartidor {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteById(id);
    }
}
exports.DeleteRepartidor = DeleteRepartidor;
