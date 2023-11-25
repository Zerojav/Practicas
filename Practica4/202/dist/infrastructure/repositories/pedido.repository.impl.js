"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepositoryImpl = void 0;
class PedidoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createPedidoDto) {
        return this.datasource.create(createPedidoDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updatePedidoDto) {
        return this.datasource.updateById(updatePedidoDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.PedidoRepositoryImpl = PedidoRepositoryImpl;
