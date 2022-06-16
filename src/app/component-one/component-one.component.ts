import { Component, OnInit } from '@angular/core';
import { Customer  } from 'src/app/customer.serivce';



@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  providers:[Customer]
})


export class ComponentOneComponent implements OnInit {

constructor(public refCustomer:Customer) { }

  // whenever my component is loading this is also loading at the same time

  CustomersData:any = [];
  Name = "";
  ngOnInit(): void {
      //let obCustomer = new Customer();   // I am (Madan) creating the object manually....
      this.CustomersData = this.refCustomer.getCustomers("Component A");
      //this.log.getLogs("Componenet One" ,this.CustomersData);
  }

  evtSubmit(){
    console.log("I am giving " , this.Name);
    this.refCustomer.submit(this.Name);
    //console.log(this.Name);
  }

}
