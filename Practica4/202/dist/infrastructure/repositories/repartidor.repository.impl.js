"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorRepositoryImpl = void 0;
class RepartidorRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createRepartidorDto) {
        return this.datasource.create(createRepartidorDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateRepartidorDto) {
        return this.datasource.updateById(updateRepartidorDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.RepartidorRepositoryImpl = RepartidorRepositoryImpl;
