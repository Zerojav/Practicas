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
exports.RepartidorController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class RepartidorController {
    constructor() {
        this.getRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const repartidor = yield postgres_1.prisma.repartidor.findMany();
            return res.json(repartidor);
        });
        // localhost:3000/repartidor/1
        this.getRepartidorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'El argumento ID no es un número' });
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id }
            });
            (repartidor)
                ? res.json(repartidor)
                : res.status(400);
        });
        this.createRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const createRepartidorDto = dtos_1.CreateRepartidorDto.create(req.body);
            if (createRepartidorDto instanceof Error) {
                return res.status(400).json({ error: createRepartidorDto.message });
            }
            const repartidor = yield postgres_1.prisma.repartidor.create({
                data: createRepartidorDto,
            });
            res.json(repartidor);
        });
        this.updateRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const updateRepartidorDto = dtos_1.UpdateRepartidorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (updateRepartidorDto instanceof Error) {
                return res.status(400).json({ error: updateRepartidorDto.message });
            }
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id }
            });
            if (!repartidor) {
                return res.status(404).json({ error: `El repartidor con la id ${id} no ha sido encontrado.` });
            }
            const updatedRepartidor = yield postgres_1.prisma.repartidor.update({
                where: { id },
                data: updateRepartidorDto.values,
            });
            res.json(updatedRepartidor);
        });
        this.deleteRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const repartidor = yield postgres_1.prisma.repartidor.findFirst({
                where: { id }
            });
            if (!repartidor)
                return res.status(404).json({ error: `El repartidor con el id ${id} no ha sido encontrado` });
            const deleted = yield postgres_1.prisma.repartidor.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `El repartidor con el id ${id} no ha sido encontrado` });
        });
    }
}
exports.RepartidorController = RepartidorController;
