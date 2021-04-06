import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PelisculasPosterGridComponent } from './pelisculas-poster-grid/pelisculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PelisculasPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PelisculasPosterGridComponent
  ]
})
export class ComponentsModule { }
