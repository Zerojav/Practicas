"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRepartidors = void 0;
class GetRepartidors {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return this.repository.getAll();
    }
}
exports.GetRepartidors = GetRepartidors;
