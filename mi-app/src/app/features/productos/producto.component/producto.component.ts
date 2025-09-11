import { Component, Input } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto!: Producto;

  constructor(private productoService: ProductoService) {}

  emitirDetalleProducto() {
    this.productoService.detalleProductoEmmiter.emit(this.producto);
  }
}
