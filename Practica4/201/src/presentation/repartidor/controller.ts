import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { CreateRepartidorDto, UpdateRepartidorDto } from "../../domain/dtos";

export class RepartidorController {

    constructor(){}
    public getRepartidor = async(req: Request, res: Response) => {
        const repartidor = await prisma.repartidor.findMany();
        return res.json(repartidor);
    };

    // localhost:3000/repartidor/1
    public getRepartidorById = async(req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json( {error: 'El argumento ID no es un número'});
        const repartidor = await prisma.repartidor.findFirst({
            where: { id }
        });

        ( repartidor )
        ? res.json( repartidor )
        : res.status(400)
    };

    public createRepartidor = async (req: Request, res: Response) => {
        const createRepartidorDto = CreateRepartidorDto.create(req.body);
        if(createRepartidorDto instanceof Error){
            return res.status(400).json({ error:createRepartidorDto.message});
        }

        const repartidor = await prisma.repartidor.create({
            data: createRepartidorDto,
        });

        res.json(repartidor);
    };

    public updateRepartidor = async (req: Request, res: Response) => {
        const id =+ req.params.id;
        const updateRepartidorDto = UpdateRepartidorDto.create({ ...req.body, id});
        
        if (updateRepartidorDto instanceof Error) {
            return res.status(400).json({ error: updateRepartidorDto.message});
        }

        const repartidor = await prisma.repartidor.findFirst({
            where: { id }
        });

        if(!repartidor) {
            return res.status(404).json({ error: `El repartidor con la id ${id} no ha sido encontrado.`});
        }

        const updatedRepartidor = await prisma.repartidor.update({
            where: { id },
            data: updateRepartidorDto.values,
        });
        res.json(updatedRepartidor)
    };

    public deleteRepartidor = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const repartidor = await prisma.repartidor.findFirst({
            where: {id}
        });
        
        if ( !repartidor ) return res.status(404).json({ error: `El repartidor con el id ${ id } no ha sido encontrado`});
        const deleted = await prisma.repartidor.delete({
            where: { id }
        });
        ( deleted )
        ? res.json ( deleted )
        :res.status(400).json({ error: `El repartidor con el id ${ id } no ha sido encontrado` });
    }
}