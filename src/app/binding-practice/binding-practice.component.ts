import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrl: './binding-practice.component.css'
})
export class BindingPracticeComponent implements OnInit{
  itemImageUrl: string = "img.jpg";

  testClasses:string = "abc def";
  applyTestClass:boolean = false;
  applyRedStyle: boolean = true;
  testObj:Object = {ID:1,Name:"Bilal", Age:100};
  clickCounter:number = 0;

  login1:string ="test1";
  login2:string ="test2";
  login3:string ="test3";

  fontSizePx1:number =  16;
  fontSizePx2:number =  16;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
