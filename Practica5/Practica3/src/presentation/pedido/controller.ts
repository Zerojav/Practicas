import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePedidoDto, UpdatePedidoDto } from '../../domain/dtos';

export class PedidoController {

    constructor(){}

    public getPedido = async (req: Request, res: Response) => {
        const pedido = await prisma.pedido.findMany();
        return res.json(pedido);
    };

    public createPedido = async (req: Request, res: Response) => {
        const createPedidoDto = CreatePedidoDto.create(req.body);

        if (createPedidoDto instanceof Error) {
            return res.status(400).json({ error: createPedidoDto.message });
        }

        const pedido = await prisma.pedido.create({
            data: createPedidoDto,
        });

        res.json(pedido);
    };

    public getPedidoById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        if(isNaN(id)) {
            return res.status(400).json({ error: 'El argumento ID no es un número.'})
        }

        const pedido = await prisma.pedido.findFirst({
            where: { id }
        });

        if (pedido) {
            res.json(pedido);
        } else {
            res.status(400).json({ error: `El pedido con la id ${id} no ha sido encontrado.` })
        }
    };

    public updatePedido = async (req:Request, res: Response) => {
        const id = +req.params.id;
        const updatePedidoDto = UpdatePedidoDto.create({ ...req.body, id});

        if (updatePedidoDto instanceof Error) {
            return res.status(400).json({ error: updatePedidoDto.message });
        }

        const pedido = await prisma.pedido.findFirst({
            where: { id }
        });

        if(!pedido) {
            return res.status(404).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
        }

        const updatedPedido = await prisma.pedido.update({
            where: { id },
            data: updatePedidoDto.values
        });

        res.json(updatedPedido);
    };

    public deletePedido = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const pedido = await prisma.pedido.findFirst({
            where: { id },
        });

        if (!pedido) {
            return res.status(404).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
        }

        const deleted = await prisma.pedido.delete({
            where: { id },
        });

        if (deleted) {
            res.json(deleted);
        } else {
            res.status(400).json({ error: `El pedido con la id ${id} no ha sido encontrado.` });
        }
    };
}