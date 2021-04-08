import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-pelisculas-poster-grid',
  templateUrl: './pelisculas-poster-grid.component.html',
  styleUrls: ['./pelisculas-poster-grid.component.css']
})
export class PelisculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];


  constructor(private router: Router) { }

  ngOnInit(): void {

    console.log(this.movies);


  }

  onMovieClick(movie: Movie){
    this.router.navigate(['/pelicula',movie.id]);

  }


}
