import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Film, Films } from '../types/films.type';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Films>('assets/db/films.json').pipe(
      map((data) => {
        return data.films
      })
    );
  }

  getFilmById(id: string): Observable<Film | Error> {
    return this.getFilms().pipe(
      map((films) => {
        const film = films.find((film) => film.id === id)
        
        if (!film) {
          throw new Error(`Фильм с id ${id} не существует.`);
        }
        return film;
      }),
      catchError((error) => {
        console.error('Ошибка при получении фильма:', error);
        return throwError(() => new Error(error.message));
      })
    )
  }
}