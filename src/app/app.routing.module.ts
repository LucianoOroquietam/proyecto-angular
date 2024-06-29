import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CerveceriaAboutComponent } from './cerveceria-about/cerveceria-about.component';
import { BeerListComponent } from './beer-list/beer-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cervezas', pathMatch: 'full' },  // Redirección por defecto a 'home'
    { path: 'cervezas', component: BeerListComponent },
    { path:'about', component: CerveceriaAboutComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }