import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto!: { descripcion: string; precio: number };
}
