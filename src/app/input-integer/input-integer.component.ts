import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent implements OnInit{
  // Esto asume que `cantidad y max` seran proporcionados por el componente padre
  @Input()
  cantidad!: number; 
  @Input() 
  max!:number;
  @Output()
  cantidadChange = new EventEmitter<number>();
  @Output() 
  maximoAlcance = new EventEmitter<string>();

  min_cantidad:number = 1;

  constructor(){
  }

  ngOnInit(){}
  
  aumentarCantidad() : void {
    if(this.cantidad < this.max){
        this.cantidad++;
        this.emitirCambioDeCantidad()
    }
    else{
        this.maximoAlcance.emit("Se alcanzo el maximo de cervezas para comprar");
    }
  }
 
  disminuirCantidad() : void {
    if(this.cantidad < this.min_cantidad)
      this.cantidad = 0;
    else
      this.cantidad--;
      this.emitirCambioDeCantidad()
  }

  cambiarCantidad(event:any) : void {

    const valor = Number(event.target.value); 

    if (valor < this.min_cantidad) {
      this.cantidad = this.min_cantidad;
    } else if (valor > this.max) {
      this.cantidad = this.max;
    } else {
      this.cantidad = valor;
    }
    this.emitirCambioDeCantidad()
  }

  private emitirCambioDeCantidad(): void {
    this.cantidadChange.emit(this.cantidad);
  }
  

}
