import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../servicios/carrito-cerveza.service';
import { Beer } from '../models/Beer';
import { Subscription } from 'rxjs/internal/Subscription';
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
  
  constructor(private carrito: CarritoCervezaService){
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }
  ngOnInit(): void {

  }


}

