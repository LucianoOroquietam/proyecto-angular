import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../models/Beer';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { CarritoComponent } from "../carrito/carrito.component";
import { MockCerveza } from '../models/mock-cerveza';




@Component({
  selector: 'app-beer-list',
  standalone: true,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css',
  imports: [CommonModule, FormsModule, InputIntegerComponent, CarritoComponent]
})



export class BeerListComponent implements OnInit {
  mostrarCarrito: boolean = false;
  mostrarError: boolean = false;
  titulo_cervezas: String = 'Lista De Cervezas';
  mostrarContenido: Boolean = false;
  cervezas: any;
  
  constructor(private carritoService: CarritoCervezaService) {
  }
  ngOnInit(): void {
    this.cervezas = MockCerveza;
  }

  addToCart(cerveza: Beer): void {
    if (cerveza.cantidad > 0) {
    this.carritoService.addToCart(cerveza);
    cerveza.stock -= cerveza.cantidad;
    this.mostrarError = false;
    this.actualizareVisibilidadCarrito();
    cerveza.cantidad = 0;
    }else {
      this.mostrarError = true;
      setTimeout(() => {
        this.mostrarError = false;
      }, 3000);
    }
  }

  maxAlcance(m: string) {
    alert(m)
  }

  actualizareVisibilidadCarrito() {
    this.mostrarCarrito = this.cervezas.some((cerveza: { cantidad: number; }) => cerveza.cantidad > 0);
    
  }
  cantidadModificada() {
    this.actualizareVisibilidadCarrito();
    this.mostrarError = false;
  }

}





