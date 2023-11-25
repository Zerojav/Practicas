"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosController = void 0;
const dtos_1 = require("../../domain/dtos");
const domain_1 = require("../../domain");
class PedidosController {
    //* DI
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.getPedidos = (req, res) => {
            new domain_1.GetPedidos(this.pedidoRepository)
                .execute()
                .then(pedidos => res.json(pedidos))
                .catch(error => res.status(400).json({ error }));
        };
        this.getPedidoById = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetPedido(this.pedidoRepository)
                .execute(id)
                .then(pedido => res.json(pedido))
                .catch(error => res.status(400).json({ error }));
        };
        this.createPedido = (req, res) => {
            const [error, createPedidoDto] = dtos_1.CreatePedidoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreatePedido(this.pedidoRepository)
                .execute(createPedidoDto)
                .then(pedido => res.json(pedido))
                .catch(error => res.status(400).json({ error }));
        };
        this.updatePedido = (req, res) => {
            const id = +req.params.id;
            const [error, updatePedidoDto] = dtos_1.UpdatePedidoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdatePedido(this.pedidoRepository)
                .execute(updatePedidoDto)
                .then(pedido => res.json(pedido))
                .catch(error => res.status(400).json({ error }));
        };
        this.deletePedido = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeletePedido(this.pedidoRepository)
                .execute(id)
                .then(pedido => res.json(pedido))
                .catch(error => res.status(400).json({ error }));
        };
    }
}
exports.PedidosController = PedidosController;
