import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {

  data:string='data send from parent component'
  datap:string=''
  send()
  {
    this.datap=this.data
  }
  constructor() { }

  ngOnInit(): void {
  }

}
