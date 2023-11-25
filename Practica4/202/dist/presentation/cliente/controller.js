"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesController = void 0;
const dtos_1 = require("../../domain/dtos");
const domain_1 = require("../../domain");
class ClientesController {
    //* DI
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
        this.getClientes = (req, res) => {
            new domain_1.GetClientes(this.clienteRepository)
                .execute()
                .then(clientes => res.json(clientes))
                .catch(error => res.status(400).json({ error }));
        };
        this.getClienteById = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetCliente(this.clienteRepository)
                .execute(id)
                .then(cliente => res.json(cliente))
                .catch(error => res.status(400).json({ error }));
        };
        this.createCliente = (req, res) => {
            const [error, createClienteDto] = dtos_1.CreateClienteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateCliente(this.clienteRepository)
                .execute(createClienteDto)
                .then(cliente => res.json(cliente))
                .catch(error => res.status(400).json({ error }));
        };
        this.updateCliente = (req, res) => {
            const id = +req.params.id;
            const [error, updateClienteDto] = dtos_1.UpdateClienteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateCliente(this.clienteRepository)
                .execute(updateClienteDto)
                .then(cliente => res.json(cliente))
                .catch(error => res.status(400).json({ error }));
        };
        this.deleteCliente = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteCliente(this.clienteRepository)
                .execute(id)
                .then(cliente => res.json(cliente))
                .catch(error => res.status(400).json({ error }));
        };
    }
}
exports.ClientesController = ClientesController;
