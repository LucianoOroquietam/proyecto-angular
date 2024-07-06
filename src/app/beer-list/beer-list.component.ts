import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../models/Beer';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { CarritoComponent } from "../carrito/carrito.component";




@Component({
  selector: 'app-beer-list',
  standalone: true,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css',
  imports: [CommonModule, FormsModule, InputIntegerComponent, CarritoComponent]
})



export class BeerListComponent {
  showCart: boolean = false;
  showError: boolean = false;
  titulo_cervezas: String = 'Lista De Cervezas';
  mostrarContenido: Boolean = false;
  
  beers: Beer[] = [
    { id: 1, nombre: 'Porter', tipo: 'Porter', precio: 2000, stock: 20, promocion: false, cantidad: 0, img: 'assets/img/porter.jpg' },
    { id: 2, nombre: 'IPA', tipo: 'Ale', precio: 1500, stock: 15, promocion: true, cantidad: 0, img: 'assets/img/ipa.webp' },
    { id: 3, nombre: 'Blonde', tipo: 'Lager', precio: 1700, stock: 10, promocion: true, cantidad: 0, img: 'assets/img/blonde.jpg' },
    { id: 4, nombre: 'Stout', tipo: 'Porter', precio: 2200, stock: 0, promocion: false, cantidad: 0, img: 'assets/img/stout.webp' },
    { id: 5, nombre: 'Stout', tipo: 'Porter', precio: 2200, stock: 0, promocion: false, cantidad: 0, img: 'assets/img/stout.webp' },
  ];

  constructor(private carritoService: CarritoCervezaService) {
  }

  addToCart(beer: Beer): void {
    if (beer.cantidad > 0) {
    this.carritoService.addToCart(beer);
    beer.stock -= beer.cantidad;
    this.showError = false;
    this.actualizareVisibilidadCarrito();
    beer.cantidad = 0;
    }else {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    }
  }

  maxAlcance(m: string) {
    alert(m)
  }

  actualizareVisibilidadCarrito() {
    this.showCart = this.beers.some(beer => beer.cantidad > 0);
    
  }
  cantidadModificada() {
    this.actualizareVisibilidadCarrito();
    this.showError = false;
  }

}





