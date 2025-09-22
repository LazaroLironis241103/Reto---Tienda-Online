import { Routes } from '@angular/router';
import { ProductoListado } from './features/productos/producto-listado/producto-listado.component';
import { ProductoFormularioComponent } from './features/productos/producto-formulario/producto-formulario.component';
import { ErrorComponent } from './features/productos/error.component/error.component';

export const routes: Routes = [
    {path: '',component: ProductoListado}, //localhost:4200/
    {path: 'listado', component: ProductoListado},
    {path: 'agregar', component: ProductoFormularioComponent},
    {path: 'editar/:llave', component: ProductoFormularioComponent},
    //Ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}
];
