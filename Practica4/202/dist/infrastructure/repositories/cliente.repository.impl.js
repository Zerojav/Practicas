"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepositoryImpl = void 0;
class ClienteRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createClienteDto) {
        return this.datasource.create(createClienteDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateClienteDto) {
        return this.datasource.updateById(updateClienteDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.ClienteRepositoryImpl = ClienteRepositoryImpl;
