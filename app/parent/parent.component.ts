import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentInput1:any=''
  childOutput2:any=''
  constructor() { }

  ngOnInit(): void {
    console.log(this.childOutput2);
    
  }
  getData(value:any)
  {
    this.childOutput2=value
  }
}
