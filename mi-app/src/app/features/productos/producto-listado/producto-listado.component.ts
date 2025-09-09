import { Component } from '@angular/core';
import { ProductoFormularioComponent } from "../producto-formulario/producto-formulario.component";
import { ProductoComponent } from '../producto.component/producto.component';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [ProductoFormularioComponent, ProductoComponent], // ✅ solo los componentes standalone
  templateUrl: './producto-listado.html',
  styleUrls: ['./producto-listado.css']
})
export class ProductoListado {
  productos = [
    { descripcion: 'Pantalón', precio: 130 },
    { descripcion: 'Camisa', precio: 80 },
    { descripcion: 'Remera', precio: 50 },
  ];

  agregarProducto(producto: { descripcion: string; precio: number }) {
    this.productos.push(producto);
  }
}
