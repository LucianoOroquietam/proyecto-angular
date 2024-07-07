import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, throwError, catchError } from 'rxjs';
import { Beer } from '../models/Beer';

const apiUrl = 'https://6677082a145714a1bd738bd9.mockapi.io/api/beers';

@Injectable({
  providedIn: 'root'
})
export class DatosCervezasService {



  constructor(private http:HttpClient) { }


  obtenerCervezas(): Observable<Beer[]>{
     return this.http.get<Beer[]>(apiUrl).pipe(
      tap((cervezas: Beer[]) => {
        cervezas.forEach(cerveza => cerveza.cantidad = 0);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocurrió un error:', error);
    return throwError('Error al obtener datos de cervezas. Por favor, inténtelo de nuevo más tarde.');
  }
}