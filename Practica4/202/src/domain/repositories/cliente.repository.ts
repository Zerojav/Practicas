import { CreateClienteDto, UpdateClienteDto } from '../dtos';
import { ClienteEntity } from '../entities/cliente.entity';



export abstract class ClienteRepository {

  abstract create( createClienteDto: CreateClienteDto ): Promise<ClienteEntity>;

  abstract getAll(): Promise<ClienteEntity[]>;

  abstract findById( id: number ): Promise<ClienteEntity>;
  abstract updateById( updateTodoDto: UpdateClienteDto ): Promise<ClienteEntity>;
  abstract deleteById( id: number ): Promise<ClienteEntity>;

}