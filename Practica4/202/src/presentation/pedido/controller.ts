import { Request, Response } from 'express';
import { CreatePedidoDto, UpdatePedidoDto } from '../../domain/dtos';
import { CreatePedido, DeletePedido, GetPedido, GetPedidos, PedidoRepository, UpdatePedido } from '../../domain';


export class PedidosController {

  //* DI
  constructor(
    private readonly pedidoRepository: PedidoRepository,
  ) { }


  public getPedidos = ( req: Request, res: Response ) => {

    new GetPedidos( this.pedidoRepository )
      .execute()
      .then( pedidos => res.json( pedidos ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getPedidoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetPedido( this.pedidoRepository )
      .execute( id )
      .then( pedido => res.json( pedido ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createPedido = ( req: Request, res: Response ) => {
    const [ error, createPedidoDto ] = CreatePedidoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreatePedido( this.pedidoRepository )
      .execute( createPedidoDto! )
      .then( pedido => res.json( pedido ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updatePedido = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePedidoDto ] = UpdatePedidoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdatePedido( this.pedidoRepository )
      .execute( updatePedidoDto! )
      .then( pedido => res.json( pedido ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deletePedido = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeletePedido( this.pedidoRepository )
      .execute( id )
      .then( pedido => res.json( pedido ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 