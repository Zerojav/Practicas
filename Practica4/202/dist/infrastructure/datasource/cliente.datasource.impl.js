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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class ClienteDatasourceImpl {
    create(createClienteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pedidos } = createClienteDto, rest = __rest(createClienteDto, ["pedidos"]);
            const cliente = yield postgres_1.prisma.cliente.create({
                data: rest
            });
            return domain_1.ClienteEntity.fromObject(cliente);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield postgres_1.prisma.cliente.findMany();
            return clientes.map(cliente => domain_1.ClienteEntity.fromObject(cliente));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            if (!cliente)
                throw `Cliente with id ${id} not found`;
            return domain_1.ClienteEntity.fromObject(cliente);
        });
    }
    updateById(updateClienteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateClienteDto.id);
            const updatedCliente = yield postgres_1.prisma.cliente.update({
                where: { id: updateClienteDto.id },
                data: updateClienteDto.values
            });
            return domain_1.ClienteEntity.fromObject(updatedCliente);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.cliente.delete({
                where: { id }
            });
            return domain_1.ClienteEntity.fromObject(deleted);
        });
    }
}
exports.ClienteDatasourceImpl = ClienteDatasourceImpl;
