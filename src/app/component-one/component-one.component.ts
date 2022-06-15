import { Component, OnInit } from '@angular/core';
import { Customer  } from 'src/app/customer.serivce';
import { LogsService } from 'src/app/logs.Service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  providers:[Customer , LogsService]
})


export class ComponentOneComponent implements OnInit {

  constructor(public refCustomer:Customer , public log:LogsService) { }

  // whenever my component is loading this is also loading at the same time

  CustomersData:any = [];
  ngOnInit(): void {
      //let obCustomer = new Customer();   // I am (Madan) creating the object manually....
      this.CustomersData = this.refCustomer.getCustomers();
      this.log.getLogs("Componenet One" ,this.CustomersData);
  }

  

}
