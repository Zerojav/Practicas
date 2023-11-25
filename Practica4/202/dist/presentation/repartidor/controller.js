"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorsController = void 0;
const dtos_1 = require("../../domain/dtos");
const domain_1 = require("../../domain");
class RepartidorsController {
    //* DI
    constructor(repartidorRepository) {
        this.repartidorRepository = repartidorRepository;
        this.getRepartidors = (req, res) => {
            new domain_1.GetRepartidors(this.repartidorRepository)
                .execute()
                .then(repartidors => res.json(repartidors))
                .catch(error => res.status(400).json({ error }));
        };
        this.getRepartidorById = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetRepartidor(this.repartidorRepository)
                .execute(id)
                .then(repartidor => res.json(repartidor))
                .catch(error => res.status(400).json({ error }));
        };
        this.createRepartidor = (req, res) => {
            const [error, createRepartidorDto] = dtos_1.CreateRepartidorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateRepartidor(this.repartidorRepository)
                .execute(createRepartidorDto)
                .then(repartidor => res.json(repartidor))
                .catch(error => res.status(400).json({ error }));
        };
        this.updateRepartidor = (req, res) => {
            const id = +req.params.id;
            const [error, updateRepartidorDto] = dtos_1.UpdateRepartidorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateRepartidor(this.repartidorRepository)
                .execute(updateRepartidorDto)
                .then(crepartidor => res.json(crepartidor))
                .catch(error => res.status(400).json({ error }));
        };
        this.deleteRepartidor = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteRepartidor(this.repartidorRepository)
                .execute(id)
                .then(repartidor => res.json(repartidor))
                .catch(error => res.status(400).json({ error }));
        };
    }
}
exports.RepartidorsController = RepartidorsController;
