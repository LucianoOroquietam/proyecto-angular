import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { Beer } from '../models/Beer';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit, OnDestroy{
  titulo:String = "Carrito de compras";
  listaCarrito: Beer[] =[];
  private subscription: Subscription = new Subscription;
  
  constructor(private carrito: CarritoCervezaService){}

  ngOnInit(): void { 
    this.carrito.listaCarrito.subscribe(beers => {
      this.listaCarrito = beers; // Actualiza la propiedad local con los datos del Observable
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}

