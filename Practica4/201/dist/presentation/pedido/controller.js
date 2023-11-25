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
exports.PedidoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PedidoController {
    constructor() {
        this.getPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pedido = yield postgres_1.prisma.pedido.findMany();
            return res.json(pedido);
        });
        this.createPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const createPedidoDto = dtos_1.CreatePedidoDto.create(req.body);
            if (createPedidoDto instanceof Error) {
                return res.status(400).json({ error: createPedidoDto.message });
            }
            const pedido = yield postgres_1.prisma.pedido.create({
                data: createPedidoDto,
            });
            res.json(pedido);
        });
        this.getPedidoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id)) {
                return res.status(400).json({ error: 'El argumento ID no es un número.' });
            }
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { id }
            });
            if (pedido) {
                res.json(pedido);
            }
            else {
                res.status(400).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
            }
        });
        this.updatePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const updatePedidoDto = dtos_1.UpdatePedidoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (updatePedidoDto instanceof Error) {
                return res.status(400).json({ error: updatePedidoDto.message });
            }
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { id }
            });
            if (!pedido) {
                return res.status(404).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
            }
            const updatedPedido = yield postgres_1.prisma.pedido.update({
                where: { id },
                data: updatePedidoDto.values
            });
            res.json(updatedPedido);
        });
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const pedido = yield postgres_1.prisma.pedido.findFirst({
                where: { id },
            });
            if (!pedido) {
                return res.status(404).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
            }
            const deleted = yield postgres_1.prisma.pedido.delete({
                where: { id },
            });
            if (deleted) {
                res.json(deleted);
            }
            else {
                res.status(400).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
            }
        });
    }
}
exports.PedidoController = PedidoController;
