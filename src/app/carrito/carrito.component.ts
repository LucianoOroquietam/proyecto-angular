import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../servicios/carrito-cerveza.service';
import { Beer } from '../models/Beer';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  titulo:String = "Carrito de compras";
  listaCarrito$: Observable<Beer[]>;
  totalCarrito$: Observable<number>;

  
  constructor(private carritoService: CarritoCervezaService){
    this.listaCarrito$ = carritoService.listaCarrito.asObservable();
    this.totalCarrito$ = carritoService.totalCarrito$;
  }
  ngOnInit(): void {  }

  removeFromCart(beer: Beer): void {
    this.carritoService.removeFromCart(beer);
    
  }

}

