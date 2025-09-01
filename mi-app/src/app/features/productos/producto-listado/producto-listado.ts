import { Component } from '@angular/core';
import { NgForOf } from '@angular/common'

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './producto-listado.html',
  styleUrl: './producto-listado.css'
})
export class ProductoListado {
   productos = [
    { descripcion: 'Pantalón, $', precio: 130 },
    { descripcion: 'Camisa, $', precio: 80 },
    { descripcion: 'Remera, $', precio: 50 },
   ]

  constructor() {}
}

