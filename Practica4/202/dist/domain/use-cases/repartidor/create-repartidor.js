"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepartidor = void 0;
// ctrl+ shift + l
class CreateRepartidor {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateRepartidor = CreateRepartidor;
