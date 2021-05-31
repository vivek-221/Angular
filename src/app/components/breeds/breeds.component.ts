import { Component, OnInit } from '@angular/core';
import { Breed } from './breeds.model';
@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breeds: Breed[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.breeds.push(new Breed("Ongole", "white"));
    this.breeds.push(new Breed("Gir", "red"));
  }
 info()
  {
    alert('You have selected one breed')
    console.log( Breed.name+"Selected!")
  }

 
 


}
