import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListado } from "./features/productos/producto-listado/producto-listado";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoListado],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  protected readonly titulo = "Tienda Online";
}

