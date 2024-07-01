import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CerveceriaAboutComponent } from './cerveceria-about/cerveceria-about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,BeerListComponent,CarritoComponent,CerveceriaAboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Tandilia';
}

