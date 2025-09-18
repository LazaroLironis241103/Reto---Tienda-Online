import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // VAriable para el id siguiente y unico
  private idSiguiente = 1;

  productos: Producto[] = [];

  constructor() {
    // Inicializamos los productos
    this.inicializarProductos();
  }

  private inicializarProductos() {
    const producto1 = new Producto(this.idSiguiente++, 'Pantalón', 130);
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 80);
    const producto3 = new Producto(this.idSiguiente++, 'Remera', 50);

    //Agregamos al arreglo de productos
    this.productos.push(producto1, producto2, producto3);
  }

  //Agregar o Modificar un producto existente
   guardarProducto(producto: Producto) {
    if(producto.id === null) { // Caso agregar
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else { // Caso modificar
      // Si el producto tiene un id, entonces lo actualizamos
      const indice = this.productos.findIndex(p => p.id === producto.id);
      if (indice !== -1) {
        this.productos[indice] = producto;
      }
    }
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id)
  }

  eliminarProducto(id: number) {
    const indice = this.productos.findIndex(producto => producto.id === id);
    if(indice !== -1) {
      this.productos.splice(indice, 1);
    }
  }
}
