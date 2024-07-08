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
  compraFinalizada: boolean = false;
  mostrarBoton: boolean = false;
  
  constructor(private carritoService: CarritoCervezaService){
    this.listaCarrito$ = carritoService.listaCarrito.asObservable();
    this.totalCarrito$ = carritoService.totalCarrito$;
  }
  ngOnInit(): void {  }

  removeFromCart(beer: Beer): void {
    this.carritoService.removeFromCart(beer);
    this.ocultarBotonAlEliminar();
  }

  ocultarBotonAlEliminar(){
    this.mostrarBoton = true;
    this.mostrarBotonFinalizarCompra();
  }

  mostrarBotonFinalizarCompra(){
    this.mostrarBoton = false;
  }


  if () {
    
  }
  finalizarCompra() {
    setTimeout(() => {
      // Limpiar el carrito
    this.carritoService.clearCart();
    this.mostrarBoton= true;
    this.compraFinalizada = true;
    }, 500);
    setTimeout(()=>{
      window.location.reload();
    }, 1000)    
  }

}

