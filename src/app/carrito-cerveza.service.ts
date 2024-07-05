import { Injectable } from '@angular/core';
import { Beer } from './models/Beer';

/**
 * Maneja la logica del carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class CarritoCervezaService {
  listaCarrito: Beer[] = [];

  constructor() { }

  addToCart(beer: Beer) {
    // Encuentra si la cerveza ya existe en la listaCarrito
    let item: Beer | undefined = this.listaCarrito.find((v1) => v1.nombre === beer.nombre);
    
    console.log("Item encontrado:", item);
    
    if (item == undefined) {
      // item no encontrado, añadir cerveza a la lista
      this.listaCarrito.push({... beer});
      console.log(`Añadido al carrito: ${beer.nombre}`);
    } else {
      if(item.cantidad > 0 || beer.cantidad > 0){
        item.cantidad+=beer.cantidad;
        console.log(`El beer ya existe en el carrito: ${item.nombre}`);
      }
      else
        console.log("no puede haber una cantidad = 0")
        return;
    }
  
   
    console.log("Estado actual del carrito:", this.listaCarrito);
  }
  
}
