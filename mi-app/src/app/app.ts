import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductoListado } from "./features/productos/producto-listado/producto-listado.component";
import { ProductosRoutingModule } from "./features/productos/productos-routing-module";
import { LoginService } from './features/productos/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoListado, ProductosRoutingModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly titulo = "Tienda Online";

  constructor(private loginService: LoginService) {}

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}

