import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BeerListComponent } from './components/lista-cervezas/lista-cervezas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CerveceriaAboutComponent } from './components/cerveceria-about/cerveceria-about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, BeerListComponent, CarritoComponent, CerveceriaAboutComponent,]
})

export class AppComponent {
  titulo_web = 'La Cava Cervecera';
  correo = 'oroquietaluciano@gmail.com';
}

