import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputchild',
  templateUrl: './outputchild.component.html',
  styleUrls: ['./outputchild.component.css']
})
export class OutputchildComponent implements OnInit {

  constructor() { }
  data:string="this is data from child"
  
@Output() data1:EventEmitter<string>=new EventEmitter<string>();
  send()
  {
    this.data1.emit(this.data)
  }

 @Input() data2:string=''
  
  ngOnInit(): void {
  }

}
