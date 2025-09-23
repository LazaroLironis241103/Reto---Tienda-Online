import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductoFormularioComponent } from "../producto-formulario/producto-formulario.component";
import { ProductoComponent } from '../producto.component/producto.component';
import { ProductoService } from '../producto';
import { Producto } from '../producto.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [ProductoFormularioComponent, ProductoComponent],
  templateUrl: './producto-listado.html',
  styleUrls: ['./producto-listado.css']
})
export class ProductoListado implements OnInit, OnDestroy {
  productos: {[llave:string]: Producto} = {};
  productosSubscripcion: Subscription | null = null;

  constructor(private productoService: ProductoService,
    private router: Router
  ){}

  ngOnInit(){
   this.cargarProductos();

   // Escuchamos los cambios en la lista de productos
   this.productosSubscripcion = this.productoService.productosActualizados.subscribe((productos) => {
    this.productos = productos;
   });
  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]: Producto}) => {
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if(this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}
