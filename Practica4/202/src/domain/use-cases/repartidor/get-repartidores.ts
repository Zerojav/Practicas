import { RepartidorEntity } from '../../entities/repartidor.entity';
import { RepartidorRepository } from '../../repositories/repartidor.repository';


export interface GetRepartidorsUseCase {
  execute(): Promise<RepartidorEntity[]>
}


export class GetRepartidors implements GetRepartidorsUseCase {
  
  constructor(
    private readonly repository: RepartidorRepository,
  ) {}
  
  execute(): Promise<RepartidorEntity[]> {
    return this.repository.getAll();
  }

}

