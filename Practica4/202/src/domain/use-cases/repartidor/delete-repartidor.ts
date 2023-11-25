import { RepartidorEntity } from '../../entities/repartidor.entity';
import { RepartidorRepository } from '../../repositories/repartidor.repository';


export interface DeleteRepartidorUseCase {
  execute( id: number ): Promise<RepartidorEntity>
}

export class DeleteRepartidor implements DeleteRepartidorUseCase {
  
  constructor(
    private readonly repository: RepartidorRepository,
  ) {}
  
  execute( id: number ): Promise<RepartidorEntity> {
    return this.repository.deleteById(id);
  }

}

