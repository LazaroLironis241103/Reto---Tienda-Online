import { Routes } from '@angular/router';
import { ProductoListado } from './features/productos/producto-listado/producto-listado.component';
import { ProductoFormularioComponent } from './features/productos/producto-formulario/producto-formulario.component';
import { ErrorComponent } from './features/productos/error.component/error.component';
import { LoginComponent } from './features/productos/login.component/login.component';
import { LoginGuardianService } from './features/productos/login-guardian.service';

export const routes: Routes = [
    {path: '',component: ProductoListado, canActivate:[LoginGuardianService]}, //localhost:4200/
    {path: 'listado', component: ProductoListado, canActivate:[LoginGuardianService]},
    {path: 'agregar', component: ProductoFormularioComponent, canActivate:[LoginGuardianService]},
    {path: 'editar/:llave', component: ProductoFormularioComponent, canActivate:[LoginGuardianService]},
    {path: 'login', component: LoginComponent},
    //Ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}
];
