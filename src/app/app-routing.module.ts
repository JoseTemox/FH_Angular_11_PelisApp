import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
