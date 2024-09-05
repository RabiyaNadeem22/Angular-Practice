import { Component } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  per:Person;
  constructor(){
    this.per=new Person(1,"Rabiya",12);
  }

}
