import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './producto-listado.html',
  styleUrl: './producto-listado.css'
})
export class ProductoListado {
  productos = [
    { descripcion: 'Pantalón', precio: 130 },
    { descripcion: 'Camisa', precio: 80 },
    { descripcion: 'Remera', precio: 50 },
  ];

  nuevaDescripcion: string = '';

  constructor() {}
}
