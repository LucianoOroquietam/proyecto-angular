import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Beer } from '../models/Beer';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent{
  @Input() beer!: Beer; // Esto asume que `beer` será proporcionado por el componente padre

  min_cantidad:number = 1;

  constructor(){}

  
  aumentarCantidad(beer:Beer) : void {
    if(beer.cantidad < beer.stock)
      beer.cantidad++;
  }
 
  disminuirCantidad(beer:Beer) : void {
    if(beer.cantidad < this.min_cantidad)
      beer.cantidad = 0;
    else
      beer.cantidad--;
  }

  onCantidadChange(event:any, beer:Beer) : void {

    const valor = Number(event.target.value); 

    if (valor < this.min_cantidad) {
      beer.cantidad = this.min_cantidad;
    } else if (valor > beer.stock) {
      beer.cantidad = beer.stock;
    } else {
      beer.cantidad = valor;
    }
  }
}
