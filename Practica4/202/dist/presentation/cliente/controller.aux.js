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
exports.ClientesController = void 0;
const dtos_1 = require("../../domain/dtos");
class ClientesController {
    //* DI
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const clientes = yield this.clienteRepository.getAll();
            return res.json(clientes);
        });
        this.getClienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const cliente = yield this.clienteRepository.findById(id);
                res.json(cliente);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createClienteDto] = dtos_1.CreateClienteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const cliente = yield this.clienteRepository.create(createClienteDto);
            res.json(cliente);
        });
        this.updateCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateClienteDto] = dtos_1.UpdateClienteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedCliente = yield this.clienteRepository.updateById(updateClienteDto);
            return res.json(updatedCliente);
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedCliente = yield this.clienteRepository.deleteById(id);
            res.json(deletedCliente);
        });
    }
}
exports.ClientesController = ClientesController;
