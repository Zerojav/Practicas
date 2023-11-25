import { Request, Response } from 'express';
import { CreateRepartidorDto, UpdateRepartidorDto } from '../../domain/dtos';
import { CreateRepartidor, DeleteRepartidor, GetRepartidor, GetRepartidors, RepartidorRepository, UpdateRepartidor } from '../../domain';


export class RepartidorsController {

  //* DI
  constructor(
    private readonly repartidorRepository: RepartidorRepository,
  ) { }


  public getRepartidors = ( req: Request, res: Response ) => {

    new GetRepartidors( this.repartidorRepository )
      .execute()
      .then( repartidors => res.json( repartidors ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getRepartidorById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetRepartidor( this.repartidorRepository )
      .execute( id )
      .then( repartidor => res.json( repartidor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createRepartidor = ( req: Request, res: Response ) => {
    const [ error, createRepartidorDto ] = CreateRepartidorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateRepartidor( this.repartidorRepository )
      .execute( createRepartidorDto! )
      .then( repartidor => res.json( repartidor ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateRepartidor = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateRepartidorDto ] = UpdateRepartidorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateRepartidor( this.repartidorRepository )
      .execute( updateRepartidorDto! )
      .then( crepartidor => res.json( crepartidor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteRepartidor = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteRepartidor( this.repartidorRepository )
      .execute( id )
      .then( repartidor => res.json( repartidor ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 