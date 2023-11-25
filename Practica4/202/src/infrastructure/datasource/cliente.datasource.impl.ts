import { prisma } from '../../data/postgres';
import { CreateClienteDto, ClienteDatasource, ClienteEntity, UpdateClienteDto } from '../../domain';




export class ClienteDatasourceImpl implements ClienteDatasource {

  async create( createClienteDto: CreateClienteDto ): Promise<ClienteEntity> {
    const { pedidos, ...rest } =  createClienteDto
    const cliente = await prisma.cliente.create({
      data: rest
    });

    return ClienteEntity.fromObject( cliente );
  }

  async getAll(): Promise<ClienteEntity[]> {
    const clientes = await prisma.cliente.findMany();
    return clientes.map( cliente => ClienteEntity.fromObject(cliente) );
  }

  async findById( id: number ): Promise<ClienteEntity> {
    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    if ( !cliente ) throw `Cliente with id ${ id } not found`;
    return ClienteEntity.fromObject(cliente);
  }

  async updateById( updateClienteDto: UpdateClienteDto ): Promise<ClienteEntity> {
    await this.findById( updateClienteDto.id );
    
    const updatedCliente = await prisma.cliente.update({
      where: { id: updateClienteDto.id },
      data: updateClienteDto!.values
    });

    return ClienteEntity.fromObject(updatedCliente);
  }

  async deleteById( id: number ): Promise<ClienteEntity> {
    await this.findById( id );
    const deleted = await prisma.cliente.delete({
      where: { id }
    });

    return ClienteEntity.fromObject( deleted );
  }

}