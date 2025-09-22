import { Component } from '@angular/core';
import { ProductoFormularioComponent } from "../producto-formulario/producto-formulario.component";
import { ProductoComponent } from '../producto.component/producto.component';
import { ProductoService } from '../producto';
import { Producto } from '../producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [ProductoFormularioComponent, ProductoComponent], // ✅ solo los componentes standalone
  templateUrl: './producto-listado.html',
  styleUrls: ['./producto-listado.css']
})
export class ProductoListado {
productos: {[llave: string]: Producto} = {}; 

  constructor(private productoService: ProductoService,
    private router: Router
  ) {};

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos: {[llave: string]: Producto} = {}) => {
      this.productos = productos;
    });
  }

  obtenerLlaves(): string[] {
    if(this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }
}
