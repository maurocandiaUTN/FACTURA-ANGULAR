import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'home/buscador/:valor', component: HomeComponent },
    { path: 'detalle/:detalleVal', component: DetalleComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
