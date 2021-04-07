import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private  baseUrl: string = 'https://api.themoviedb.org/3';
  private cartelerapage =1;

  constructor(private http: HttpClient) { }

  get params(){
    return{
      api_key: 'c7d07fb51cf5b374d5b496f2e3ac9bcd',
      language: 'es-ES',
      page: this.cartelerapage.toString()

    }
  }

  getCartelera(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      tap( () => {
        this.cartelerapage+=1
      })
    );
  }
}
