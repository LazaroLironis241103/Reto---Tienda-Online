import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductoService } from '../producto';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-formulario.html',
  styleUrls: ['./producto-formulario.css']
})
export class ProductoFormularioComponent {
  // @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  // @ViewChild('precioInput') precioInput!: ElementRef;

  // @Output() nuevoProducto = new EventEmitter<Producto>();

  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Verificamos si debemos  cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      const producto = this.productoService.getProductoById(Number(id));
      if(producto) {
        // Si encontramos el producto lo cargamos en el formulario
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(event: Event) {
    event.preventDefault();
    
    //Validar que sean valores correctos
    if(this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) {
      return;
    }

    const producto = new Producto(this.productoId ,this.descripcionInput, this.precioInput);

    //Agregamos el nuevo producto usando el servicio
    this.productoService.guardarProducto(producto);

    //Limpiar los campos del formulario
    this.limpiarFormulario();

    //Emitimos el nuevo producto al componente padre
    // this.nuevoProducto.emit(producto);    

    // Redirigir al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    // Redirigir al inicio
this.router.navigate(['/']);
  }

  eliminarProducto() {
    if(this.productoId !== null) {
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }
  
   limpiarFormulario() {
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
   }
}
