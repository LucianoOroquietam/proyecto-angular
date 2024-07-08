import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../models/Beer';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { CarritoCervezaService } from '../servicios/carrito-cerveza.service';
import { CarritoComponent } from "../carrito/carrito.component";
import { MockCerveza } from '../models/mock-cerveza';
import { DatosCervezasService } from '../servicios/datos-cervezas.service';
import { VerificarEdadComponent } from '../verificar-edad/verificar-edad.component';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css',
  imports: [CommonModule, FormsModule, InputIntegerComponent, CarritoComponent, VerificarEdadComponent]
})

export class BeerListComponent implements OnInit {
  mostrarCarrito: boolean = false;
  mostrarError: boolean = false;
  titulo_cervezas: String = 'Lista De Cervezas';
  mostrarContenido: boolean = false;
  cervezasMock: Beer[] = [];
  cervezasApi: Beer[] = [];
  siEdadVerificada: boolean = false;

  constructor(private carritoService: CarritoCervezaService, private ServicioDatosCerveza: DatosCervezasService) { }

  ngOnInit(): void {
    this.cervezasMock = MockCerveza;
    this.ServicioDatosCerveza.obtenerCervezas().subscribe(data => this.cervezasApi = data);
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let edadVerificada = localStorage.getItem('edadVerificada');
      if (edadVerificada === 'true') {
        this.siEdadVerificada = true;
      }
    }
  }

  // Método que se ejecuta cuando el usuario confirma su edad
  verificarEdad() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.siEdadVerificada = true;
      localStorage.setItem('edadVerificada', 'true');
    }
  }


  addToCart(cerveza: Beer): void {
    if (cerveza.cantidad > 0) {
      this.carritoService.addToCart(cerveza);
      cerveza.stock -= cerveza.cantidad;
      this.mostrarError = false;
      this.actualizareVisibilidadCarrito();
      cerveza.cantidad = 0;
    } else {
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
    this.mostrarCarrito = this.cervezasApi.some((cerveza => cerveza.cantidad > 0));
  }
  cantidadModificada() {
    this.actualizareVisibilidadCarrito();
    this.mostrarError = false;
  }

}





