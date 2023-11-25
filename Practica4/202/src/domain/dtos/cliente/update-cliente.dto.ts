import { UpdatePedidoDto } from "../pedido/update-pedido.dto";


export class UpdateClienteDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly telefono?: string,
      public readonly direcciones?: string,
      public readonly email?: string,
      public readonly pedidos?: UpdatePedidoDto[],
      
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.telefono ) returnObj.telefono = this.telefono;
      if ( this.direcciones ) returnObj.direcciones = this.direcciones;
      if ( this.email ) returnObj.email = this.email;
      if ( this.pedidos ) returnObj.pedidos = this.pedidos;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateClienteDto?]  {
  
      const { id, nombre, telefono, direcciones, email, pedidos } = props;
      let newName =telefono;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !telefono && !direcciones && !email && !pedidos) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateClienteDto(id, nombre, telefono, direcciones, email, pedidos)];
    }
  
  
  }