import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  //https://www.themoviedb.org/t/p/w500/{{movie.poster_path}}

  transform(poster: string): string {
   if( poster ){
     return `http://image.tmdb.org/t/p/w500/${poster}`
   }else{
     return './assets/no-image.jpg'
   }

  }

}
