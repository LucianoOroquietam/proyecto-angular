import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { CarritoComponent } from './carrito/carrito.component';

/*@Component({
  //imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  /*template: `<h1>Hola mundo desde angular!</h1> 
  <p>parrafo 1</p>
  <h3>titulo h3</h3>`,
  //styleUrl: './app.component.css'
})*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeerListComponent,CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Tandilia';
  footer = 'soy un footer';
}

