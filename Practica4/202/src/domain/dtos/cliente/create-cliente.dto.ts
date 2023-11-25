import { CreatePedidoDto } from "../pedido/create-pedido.dto";

export class CreateClienteDto {
    private constructor(
      public readonly nombre: string,
      public readonly telefono: string,
      public readonly direccion: string,
      public readonly email: string,
      public readonly pedidos?: CreatePedidoDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateClienteDto?]  {
      const { nombre, telefono, direccion, email, pedidos } = props;
      if ( !nombre ) return ['nombre property is required', undefined];
      if ( !telefono ) return ['Telefono property is required', undefined];
      if ( !direccion ) return ['Direccion property is required', undefined];
      if ( !email ) return ['Email property is required', undefined];
      return [undefined, new CreateClienteDto(nombre, telefono, direccion, email, pedidos)];
    }
  }