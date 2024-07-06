import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { Beer } from '../models/Beer';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  titulo:String = "Carrito de compras";
  listaCarrito: Beer[] = [];
  
  constructor(private carrito: CarritoCervezaService){
    carrito.listaCarrito.subscribe((observable)=> this.listaCarrito = observable);
  }

  ngOnInit(): void {
    
  }


}

