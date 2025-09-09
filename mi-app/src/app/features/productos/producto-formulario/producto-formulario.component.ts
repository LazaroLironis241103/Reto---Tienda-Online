import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  templateUrl: './producto-formulario.html',
  styleUrls: ['./producto-formulario.css']
})
export class ProductoFormularioComponent {
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;

  @Output() nuevoProducto = new EventEmitter<{ descripcion: string; precio: number }>();

  agregarProducto(event: Event) {
    event.preventDefault();
    const descripcion = this.descripcionInput.nativeElement.value.trim();
    const precio = Number(this.precioInput.nativeElement.value);

    if (!descripcion || precio <= 0) return;

    this.nuevoProducto.emit({ descripcion, precio });

    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = '';
  }
}
