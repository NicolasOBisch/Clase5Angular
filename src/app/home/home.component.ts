import { Component, OnInit } from '@angular/core';
import { NomyApe } from '../model/NomyApe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  NomyApes: NomyApe[] = [];

  constructor() {
    this.NomyApes.push( new NomyApe(1,"Nicolas","Ochoa"));
    this.NomyApes.push( new NomyApe(2,"Alan","Gomez"));
    this.NomyApes.push( new NomyApe(3,"Name","Surname"));
    this.NomyApes.push( new NomyApe(4,"Name","Surname"));
    this.NomyApes.push( new NomyApe(5,"Name","Surname"));
   }

  ngOnInit(): void {
  }

}
