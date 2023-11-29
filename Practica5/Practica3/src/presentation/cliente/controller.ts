import { Request, Response } from 'express';
import { prisma } from "../../data/postgres";
import { CreateClienteDto, UpdateClienteDto } from "../../domain/dtos";

export class ClienteController {

    constructor(){}
    public getCliente = async(req: Request, res: Response) => {
        const cliente = await prisma.cliente.findMany();
        return res.json(cliente);
    };

    // localhost:3000/cliente/1
    public getClienteById = async(req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json( {error: 'El argumento ID no es un número'});
        const cliente = await prisma.cliente.findFirst({
            where: { id }
        });

        ( cliente )
        ? res.json( cliente )
        : res.status(400)
    };

    public createCliente = async (req: Request, res: Response) => {
        const createClienteDto = CreateClienteDto.create(req.body);
        if(createClienteDto instanceof Error){

            return res.status(400).json({ error:createClienteDto.message});
        }

        const cliente = await prisma.cliente.create({
            data: createClienteDto,
        });

        res.json(cliente);
    };

    public updateCliente = async (req: Request, res: Response) => {
        const id =+ req.params.id;
        const updateClienteDto = UpdateClienteDto.create({ ...req.body, id});
        
        if (updateClienteDto instanceof Error) {
            return res.status(400).json({ error: updateClienteDto.message});
        }

        const cliente = await prisma.cliente.findFirst({
            where: { id }
        });

        if(!cliente) {
            return res.status(404).json({ error: `El cliente con la id ${id} no ha sido encontrado.`});
        }

        const updatedCliente = await prisma.cliente.update({
            where: { id },
            data: updateClienteDto.values,
        });
        res.json(updatedCliente)
    };

    public deleteCliente = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const cliente = await prisma.cliente.findFirst({
            where: {id}
        });
        
        if ( !cliente ) return res.status(404).json({ error: `El cliente con el id ${ id } no ha sido encontrado`});
        const deleted = await prisma.cliente.delete({
            where: { id }
        });
        ( deleted )
        ? res.json ( deleted )
        :res.status(400).json({ error: `El cliente con el id ${ id } no ha sido encontrado` });
    }
}