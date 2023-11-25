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
exports.PedidosController = void 0;
const dtos_1 = require("../../domain/dtos");
class PedidosController {
    //* DI
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.getPedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pedidos = yield this.pedidoRepository.getAll();
            return res.json(pedidos);
        });
        this.getPedidoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const pedido = yield this.pedidoRepository.findById(id);
                res.json(pedido);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
        this.createPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPedidoDto] = dtos_1.CreatePedidoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const pedido = yield this.pedidoRepository.create(createPedidoDto);
            res.json(pedido);
        });
        this.updatePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatePedidoDto] = dtos_1.UpdatePedidoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const updatedPedido = yield this.pedidoRepository.updateById(updatePedidoDto);
            return res.json(updatedPedido);
        });
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const deletedPedido = yield this.pedidoRepository.deleteById(id);
            res.json(deletedPedido);
        });
    }
}
exports.PedidosController = PedidosController;
