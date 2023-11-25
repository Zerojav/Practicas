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
exports.RepartidorsController = void 0;
const dtos_1 = require("../../domain/dtos");
class RepartidorsController {
    //* DI
    constructor(repartidorRepository) {
        this.repartidorRepository = repartidorRepository;
        this.getRepartidors = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const repartidors = yield this.repartidorRepository.getAll();
            return res.json(repartidors);
        });
        this.getRepartidorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const repartidor = yield this.repartidorRepository.findById(id);
                res.json(repartidor);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createRepartidorDto] = dtos_1.CreateRepartidorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const repartidor = yield this.repartidorRepository.create(createRepartidorDto);
            res.json(repartidor);
        });
        this.updateRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateRepartidorDto] = dtos_1.UpdateRepartidorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedRepartidor = yield this.repartidorRepository.updateById(updateRepartidorDto);
            return res.json(updatedRepartidor);
        });
        this.deleteRepartidor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedRepartidor = yield this.repartidorRepository.deleteById(id);
            res.json(deletedRepartidor);
        });
    }
}
exports.RepartidorsController = RepartidorsController;
