// DDD
import { Request, Response } from 'express';
import { CreatePedidoDto, UpdatePedidoDto } from '../../domain/dtos';
import { PedidoRepository } from '../../domain';


export class PedidosController {

  //* DI
  constructor(
    private readonly pedidoRepository: PedidoRepository,
  ) { }


  public getPedidos = async ( req: Request, res: Response ) => {
    const pedidos = await this.pedidoRepository.getAll();
    return res.json( pedidos );
  };

  public getPedidoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const pedido = await this.pedidoRepository.findById( id );
      res.json( pedido );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPedido = async ( req: Request, res: Response ) => {
    const [ error, createPedidoDto ] = CreatePedidoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const pedido = await this.pedidoRepository.create( createPedidoDto! );
    res.json( pedido );

  };

  public updatePedido = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePedidoDto ] = UpdatePedidoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPedido = await this.pedidoRepository.updateById( updatePedidoDto! );
    return res.json( updatedPedido );

  };


  public deletePedido = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedPedido = await this.pedidoRepository.deleteById( id );
    res.json( deletedPedido );

  };



}