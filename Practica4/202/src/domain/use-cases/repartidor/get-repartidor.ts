import { RepartidorEntity } from '../../entities/repartidor.entity';
import { RepartidorRepository } from '../../repositories/repartidor.repository';


export interface GetRepartidorUseCase {
  execute( id: number ): Promise<RepartidorEntity>
}


export class GetRepartidor implements GetRepartidorUseCase {
  
  constructor(
    private readonly repository: RepartidorRepository,
  ) {}
  
  execute( id: number ): Promise<RepartidorEntity> {
    return this.repository.findById(id);
  }

}

