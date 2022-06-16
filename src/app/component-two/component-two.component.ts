import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.serivce';


//By using the provider concept we  no need to create the object manuallay..

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
  providers: [Customer] // cutomser got the promotion because i am using cutomer as a service..
                        // Angular take care everting in the providers section.....
})
export class ComponentTwoComponent implements OnInit {

  // you have to give the referece of the your service...
  // The concept called dependency injection comes to the picture..
  constructor(public refCustomer:Customer) { }

  CustomersData:any = [];
  ngOnInit(): void {
    //let obCustomer = new Customer(); // I am (Madan) creating the object manually....
    this.CustomersData = this.refCustomer.getCustomers("");


  }

  
  // CustomersData = 
  // [
  //   { 'Id': 1, Hobbies: "Playing Cricket", Name: "Robert", Location: "UK", Job: "Sales Person", DOB: "1-1-1980" },
  //   { 'Id': 2, Name: "James", Hobbies: "Reading Books", Location: "Australia", Job: "Doctor", DOB: "2-2-1981" },
  //   { 'Id': 3, Name: "Clark", Hobbies: "Watching TV", Location: "Germany", Job: "Lawyer", DOB: "3-3-1982" },
  // ]

}
