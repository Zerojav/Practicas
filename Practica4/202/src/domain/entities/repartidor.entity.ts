import { PedidoEntity } from "./pedido.entity";

export class RepartidorEntity {

  constructor(
    public id: number,
    public nombre: string,
    public telefono: string,
    public email: string,
    public pedidos?: PedidoEntity[],
  ) {}

  get Pedidos() {
    return this.pedidos;
  }

  public static fromObject( object: {[key: string]: any} ): RepartidorEntity {
    const { id, nombre, telefono, email, pedidos} = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'Nombre is required';
    if ( !telefono ) throw 'Telefono is required';
    if ( !email ) throw 'Email is required';

      return new RepartidorEntity(id, nombre, telefono, email, pedidos)
  }

}


