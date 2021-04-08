import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }
  public movies: Movie [] = [];
  public txtBuscar: string ='';


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.txtBuscar = params.texto;
      //console.log(params.texto);
      let valor = params.texto;
      //llamar al servicio
      this.peliculasService.buscarlPeliculas(params.texto).subscribe( movies => {
        //console.log(movies);

        this.movies = movies
      });
    });
  }

}
