import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verificar-edad',
  templateUrl: './verificar-edad.component.html',
  styleUrls: ['./verificar-edad.component.css'],
  standalone: true
})
export class VerificarEdadComponent {
  @Output() edadVerificada = new EventEmitter<void>(); 


  // Método que se llama cuando el usuario confirma su edad
  confirmarEdad() {
    this.edadVerificada.emit(); 
  }

  negarEdad() {
    alert('Lo siento, necesitas ser mayor de 18 años para acceder a este sitio.');
  }

}
