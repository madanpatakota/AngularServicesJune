import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentonechild',
  templateUrl: './componentonechild.component.html',
  styleUrls: ['./componentonechild.component.css']
})
export class ComponentonechildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.refCustomer.evtEmitter.subscribe((Name)=>{
      console.log("I am subscribing ",Name);
  })

  }

}
