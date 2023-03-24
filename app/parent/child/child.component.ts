import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { 
   
  }
  @Input() parentInput2:any=''
  @Output() childOutput1=new EventEmitter<string>();
   sendchild:string="";

   press(){
    this.childOutput1.emit(this.sendchild)
   }
  ngOnInit(): void {
    
    
 

  }


}
