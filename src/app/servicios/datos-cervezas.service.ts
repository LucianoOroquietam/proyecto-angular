import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/Beer';

const URL = 'https://6677082a145714a1bd738bd9.mockapi.io/api/beers';

@Injectable({
  providedIn: 'root'
})
export class DatosCervezasService {



  constructor(private http:HttpClient) { }


  public obtenerCervezas(): Observable<Beer[]>{
    return this.http.get<Beer[]>(URL);  
  }
}
