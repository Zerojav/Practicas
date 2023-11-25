import { UpdatePedidoDto } from "../pedido/update-pedido.dto";


export class UpdateRepartidorDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly telefono?: string,
      public readonly email?: string,
      public readonly pedidos?: UpdatePedidoDto[],
      
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.telefono ) returnObj.telefono = this.telefono;
      if ( this.email ) returnObj.email = this.email;
      if ( this.pedidos ) returnObj.pedidos = this.pedidos;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateRepartidorDto?]  {
  
      const { id, nombre, telefono, email, pedidos } = props;
      let newName =telefono;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !telefono && !email && !pedidos) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateRepartidorDto(id, nombre, telefono, email, pedidos)];
    }
  
  
  }