import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductoService } from '../producto';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';

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

  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService) {}

  agregarProducto(event: Event) {
    event.preventDefault();
    
    //Validar que sean valores correctos
    if(this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) {
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);

    //Agregamos el nuevo producto usando el servicio
    this.productoService.agregarProducto(producto);

    //Emitimos el nuevo producto al componente padre
    // this.nuevoProducto.emit(producto);

    //Limpiar los campos de formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
