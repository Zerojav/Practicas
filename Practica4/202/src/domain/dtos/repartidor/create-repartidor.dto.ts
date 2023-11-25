import { CreatePedidoDto } from "../pedido/create-pedido.dto";

export class CreateRepartidorDto {
    private constructor(
      public readonly nombre: string,
      public readonly telefono: string,
      public readonly email: string,
      public readonly pedidos?: CreatePedidoDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateRepartidorDto?]  {
      const { nombre, telefono, email, pedidos } = props;
      if ( !nombre ) return ['nombre property is required', undefined];
      if ( !telefono ) return ['Telefono property is required', undefined];
      if ( !email ) return ['Email property is required', undefined];
      return [undefined, new CreateRepartidorDto(nombre, telefono, email, pedidos)];
    }
  }