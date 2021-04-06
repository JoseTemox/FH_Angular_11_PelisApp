import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-pelisculas-poster-grid',
  templateUrl: './pelisculas-poster-grid.component.html',
  styleUrls: ['./pelisculas-poster-grid.component.css']
})
export class PelisculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];


  constructor() { }

  ngOnInit(): void {

    console.log(this.movies);


  }

}
