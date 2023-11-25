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
exports.RepartidorDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class RepartidorDatasourceImpl {
    create(createRepartidorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pedidos } = createRepartidorDto, rest = __rest(createRepartidorDto, ["pedidos"]);
            const repartidor = yield postgres_1.prisma.repartidor.create({
                data: rest
            });
            return domain_1.RepartidorEntity.fromObject(repartidor);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const repartidors = yield postgres_1.prisma.repartidor.findMany();
            return repartidors.map(repartidor => domain_1.RepartidorEntity.fromObject(repartidor));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id }
            });
            if (!repartidor)
                throw `Repartidor with id ${id} not found`;
            return domain_1.RepartidorEntity.fromObject(repartidor);
        });
    }
    updateById(updateRepartidorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateRepartidorDto.id);
            const updatedRepartidor = yield postgres_1.prisma.repartidor.update({
                where: { id: updateRepartidorDto.id },
                data: updateRepartidorDto.values
            });
            return domain_1.RepartidorEntity.fromObject(updatedRepartidor);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.repartidor.delete({
                where: { id }
            });
            return domain_1.RepartidorEntity.fromObject(deleted);
        });
    }
}
exports.RepartidorDatasourceImpl = RepartidorDatasourceImpl;
