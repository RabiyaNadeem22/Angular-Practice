import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit{
  persons:Person[]=[];

  constructor(){}

  ngOnInit(): void {
    this.persons.push(new Person(1,"Rabiya",10));
    this.persons.push(new Person(2,"Z",11));
    this.persons.push(new Person(3,"R",12));
    this.persons.push(new Person(4,"Rx",13));
    this.persons.push(new Person(5,"jh",17));
    
  }

}
