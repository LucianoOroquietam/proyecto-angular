import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CerveceriaAboutComponent } from './components/cerveceria-about/cerveceria-about.component';
import { BeerListComponent } from './components/lista-cervezas/lista-cervezas.component';


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