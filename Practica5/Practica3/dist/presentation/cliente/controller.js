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
exports.ClienteController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ClienteController {
    constructor() {
        this.getCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cliente = yield postgres_1.prisma.cliente.findMany();
            return res.json(cliente);
        });
        // localhost:3000/cliente/1
        this.getClienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'El argumento ID no es un número' });
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            (cliente)
                ? res.json(cliente)
                : res.status(400);
        });
        this.createCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const createClienteDto = dtos_1.CreateClienteDto.create(req.body);
            if (createClienteDto instanceof Error) {
                return res.status(400).json({ error: createClienteDto.message });
            }
            const cliente = yield postgres_1.prisma.cliente.create({
                data: createClienteDto,
            });
            res.json(cliente);
        });
        this.updateCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const updateClienteDto = dtos_1.UpdateClienteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (updateClienteDto instanceof Error) {
                return res.status(400).json({ error: updateClienteDto.message });
            }
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            if (!cliente) {
                return res.status(404).json({ error: `El cliente con la id ${id} no ha sido encontrado.` });
            }
            const updatedCliente = yield postgres_1.prisma.cliente.update({
                where: { id },
                data: updateClienteDto.values,
            });
            res.json(updatedCliente);
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            if (!cliente)
                return res.status(404).json({ error: `El cliente con el id ${id} no ha sido encontrado` });
            const deleted = yield postgres_1.prisma.cliente.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `El cliente con el id ${id} no ha sido encontrado` });
        });
    }
}
exports.ClienteController = ClienteController;
