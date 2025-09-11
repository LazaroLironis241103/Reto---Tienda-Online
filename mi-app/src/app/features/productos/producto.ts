import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    { descripcion: 'Pantalón', precio: 130 },
    { descripcion: 'Camisa', precio: 80 },
    { descripcion: 'Remera', precio: 50 },
  ];

   agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
