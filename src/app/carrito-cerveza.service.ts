import { Injectable } from '@angular/core';
import { Beer } from './models/Beer';
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
    
    console.log("Item encontrado:", item);
     
    if (item == undefined) {
      // item no encontrado, añadir cerveza a la lista
      this._listaCarrito.push({... beer});
      console.log(`Añadido al carrito: ${beer.nombre}`);
    } else {
      if(item.cantidad > 0 || beer.cantidad > 0){
        item.cantidad+=beer.cantidad;
      }
      return;
    }
  
    this.listaCarrito.next(this._listaCarrito);
    console.log("Estado actual del carrito:", this.listaCarrito);
  }
  
}
