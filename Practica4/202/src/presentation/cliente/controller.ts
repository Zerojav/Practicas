import { Request, Response } from 'express';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos';
import { CreateCliente, DeleteCliente, GetCliente, GetClientes, ClienteRepository, UpdateCliente } from '../../domain';


export class ClientesController {

  //* DI
  constructor(
    private readonly clienteRepository: ClienteRepository,
  ) { }


  public getClientes = ( req: Request, res: Response ) => {

    new GetClientes( this.clienteRepository )
      .execute()
      .then( clientes => res.json( clientes ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getClienteById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetCliente( this.clienteRepository )
      .execute( id )
      .then( cliente => res.json( cliente ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createCliente = ( req: Request, res: Response ) => {
    const [ error, createClienteDto ] = CreateClienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateCliente( this.clienteRepository )
      .execute( createClienteDto! )
      .then( cliente => res.json( cliente ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateCliente = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateClienteDto ] = UpdateClienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateCliente( this.clienteRepository )
      .execute( updateClienteDto! )
      .then( cliente => res.json( cliente ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteCliente = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteCliente( this.clienteRepository )
      .execute( id )
      .then( cliente => res.json( cliente ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 