import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { tap,map } from "rxjs/operators";
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private  baseUrl: string = 'https://api.themoviedb.org/3';
  private cartelerapage =1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params(){
    return{
      api_key: 'c7d07fb51cf5b374d5b496f2e3ac9bcd',
      language: 'es-ES',
      page: this.cartelerapage.toString()

    }
  }

  getCartelera(): Observable<Movie[]>{

    console.log('Cargando Api');

    if(this.cargando){
      //cargando pelis
      return of([]); }

    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map(  (resp) => resp.results),
      tap( () => {
        this.cartelerapage+=1
        this.cargando = false;
      })
    );
  }

  buscarlPeliculas( texto: string): Observable<Movie[]>{
    //https://api.themoviedb.org/3/search/movie
    const params = {...this.params, page: '1', query: texto};// desectructuracion de objeto
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results)
    );
  }

  resetCarteleraPage(){
    this.cartelerapage = 1;
  }

  getPeliculaDetalle(id: string){
    //https://api.themoviedb.org/3/movie/399566?api_key=c7d07fb51cf5b374d5b496f2e3ac9bcd&language=es-ES

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    });
  }
}
