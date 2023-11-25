// DDD
import { Request, Response } from 'express';
import { CreateRepartidorDto, UpdateRepartidorDto } from '../../domain/dtos';
import { RepartidorRepository } from '../../domain';


export class RepartidorsController {

  //* DI
  constructor(
    private readonly repartidorRepository: RepartidorRepository,
  ) { }


  public getRepartidors = async ( req: Request, res: Response ) => {
    const repartidors = await this.repartidorRepository.getAll();
    return res.json( repartidors );
  };

  public getRepartidorById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const repartidor = await this.repartidorRepository.findById( id );
      res.json( repartidor );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createRepartidor = async ( req: Request, res: Response ) => {
    const [ error, createRepartidorDto ] = CreateRepartidorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const repartidor = await this.repartidorRepository.create( createRepartidorDto! );
    res.json( repartidor );

  };

  public updateRepartidor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateRepartidorDto ] = UpdateRepartidorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedRepartidor = await this.repartidorRepository.updateById( updateRepartidorDto! );
    return res.json( updatedRepartidor );

  };


  public deleteRepartidor = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedRepartidor = await this.repartidorRepository.deleteById( id );
    res.json( deletedRepartidor );

  };



}