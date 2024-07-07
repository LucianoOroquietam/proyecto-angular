import { Injectable } from '@angular/core';
import { Beer } from '../models/Beer';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la logica del carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class CarritoCervezaService {
  private _listaCarrito: Beer[] = [];
  listaCarrito: BehaviorSubject<Beer[]> = new BehaviorSubject(this._listaCarrito);

  constructor() { }

  addToCart(beer: Beer) {
    // Encuentra si la cerveza ya existe en la listaCarrito
    let item: Beer | undefined = this._listaCarrito.find((v1) => v1.nombre === beer.nombre);
     
    if (!item) {
      // item no encontrado, añadir cerveza a la lista
      this._listaCarrito.push({... beer});
      console.log(`Añadido al carrito: ${beer.nombre}`);
    } else {
      //si ya tenia ese item , le sumo a la cantidad que ya tenia, la nueva cantidad ingresada.
        item.cantidad+=beer.cantidad;
    }
  
    this.listaCarrito.next(this._listaCarrito); // equivalente al emmit de eventos
    console.log("Estado actual del carrito:", this.listaCarrito);
  }
}