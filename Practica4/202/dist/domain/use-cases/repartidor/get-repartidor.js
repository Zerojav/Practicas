"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRepartidor = void 0;
class GetRepartidor {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetRepartidor = GetRepartidor;
