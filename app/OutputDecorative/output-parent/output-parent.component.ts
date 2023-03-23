import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  name1:string="data send to child"
  name2:string=''
  name:any=''
  constructor() { }
  Recieve(event:any)
 {
  this.name=event
  
 }
 send()
 {
this.name2=this.name1
 }
  ngOnInit(): void {
  }

}
