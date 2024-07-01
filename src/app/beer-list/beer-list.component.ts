import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Beer } from '../models/Beer';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';



@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule,FormsModule, InputIntegerComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})



export class BeerListComponent{
  title_beers:String = 'Lista De Cervezas';


  beers: Beer[] = [
    { id: 1, nombre: 'Porter', tipo: 'Porter',precio: 2000 , stock: 100, promocion:false, cantidad: 0, img: 'assets/img/porter.jpg' },
    { id: 2, nombre: 'IPA', tipo: 'Ale', precio: 1500, stock: 50,promocion:true, cantidad: 0,  img: 'assets/img/ipa.webp' },
    { id: 3, nombre: 'Blonde', tipo: 'Lager', precio: 1700,  stock: 75 ,promocion:false, cantidad: 0,  img: 'assets/img/blonde.jpg'},
    { id: 4, nombre: 'Stout', tipo: 'Porter', precio: 2200,  stock: 0 ,promocion:true, cantidad: 0,  img: 'assets/img/stout.webp'},
  ];


  constructor(){}
 

  

}
  




