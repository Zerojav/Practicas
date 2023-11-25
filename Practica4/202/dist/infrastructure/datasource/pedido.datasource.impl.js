"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class PedidoDatasourceImpl {
    create(createPedidoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = yield postgres_1.prisma.pedido.create({
                data: createPedidoDto
            });
            return domain_1.PedidoEntity.fromObject(pedido);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const pedidos = yield postgres_1.prisma.pedido.findMany();
            return pedidos.map(pedido => domain_1.PedidoEntity.fromObject(pedido));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { id }
            });
            if (!pedido)
                throw `Pedido with id ${id} not found`;
            return domain_1.PedidoEntity.fromObject(pedido);
        });
    }
    updateById(updatePedidoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updatePedidoDto.id);
            const updatedPedido = yield postgres_1.prisma.pedido.update({
                where: { id: updatePedidoDto.id },
                data: updatePedidoDto.values
            });
            return domain_1.PedidoEntity.fromObject(updatedPedido);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.pedido.delete({
                where: { id }
            });
            return domain_1.PedidoEntity.fromObject(deleted);
        });
    }
}
exports.PedidoDatasourceImpl = PedidoDatasourceImpl;
