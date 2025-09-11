import { Component } from '@angular/core';
import { ProductoFormularioComponent } from "../producto-formulario/producto-formulario.component";
import { ProductoComponent } from '../producto.component/producto.component';
import { ProductoService } from '../producto';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [ProductoFormularioComponent, ProductoComponent], // ✅ solo los componentes standalone
  templateUrl: './producto-listado.html',
  styleUrls: ['./producto-listado.css']
})
export class ProductoListado {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    // Inicializar Productos
    this.productos = this.productoService.productos;
  }
}
