import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave: string]: Producto} = {}; 

  constructor(private datosService: DatosService) {
    
  }

  listarProductos() {
    return this.datosService.listarProductos();
  }

  //Agregar o Modificar un producto existente
   guardarProducto(producto: Producto) {
    // if(producto.id === null) { // Caso agregar
    //   producto.id = this.idSiguiente++;
    //   this.productos.push(producto);
    // } else { // Caso modificar
    //   // Si el producto tiene un id, entonces lo actualizamos
    //   const indice = this.productos.findIndex(p => p.id === producto.id);
    //   if (indice !== -1) {
    //     this.productos[indice] = producto;
    //   }
    // }
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return undefined;
    //return this.productos.find(producto => producto.id === id)
  }

  eliminarProducto(id: number) {
  //   const indice = this.productos.findIndex(producto => producto.id === id);
  //   if(indice !== -1) {
  //     this.productos.splice(indice, 1);
  //   }
  }
}
