import { CreateRepartidorDto, UpdateRepartidorDto } from '../dtos';
import { RepartidorEntity } from '../entities/repartidor.entity';



export abstract class RepartidorDatasource {

  abstract create( createRepartidorDto: CreateRepartidorDto ): Promise<RepartidorEntity>;

  abstract getAll(): Promise<RepartidorEntity[]>;

  abstract findById( id: number ): Promise<RepartidorEntity>;
  abstract updateById( updateRepartidorDto: UpdateRepartidorDto ): Promise<RepartidorEntity>;
  abstract deleteById( id: number ): Promise<RepartidorEntity>;

}