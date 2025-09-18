import { Component } from '@angular/core';
import { ProductosRoutingModule } from "../productos-routing-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error.component',
  imports: [ProductosRoutingModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
