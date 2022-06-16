
import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { EventEmitter, Injectable } from "@angular/core";
import { LogsService } from "./logs.Service";
//class is noting but a collection of statements , methods , constructor, 
//constructor 
//i can inject the servie into another service....

@Injectable()
export class Customer {
    constructor(public logService:LogsService){}
    CustomersData =
        [
            { 'Id': 1, Hobbies: "Playing Cricket", Name: "Robert", Location: "UK", Job: "Sales Person", DOB: "1-1-1980" },
            { 'Id': 2, Name: "James", Hobbies: "Reading Books", Location: "Australia", Job: "Doctor", DOB: "2-2-1981" },
            { 'Id': 3, Name: "Clark", Hobbies: "Watching TV", Location: "Germany", Job: "Lawyer", DOB: "3-3-1982" },
        ]


    evtEmitter = new EventEmitter<string>();
    //Now my eventemitter is ready to give the value
    
    getCustomers(type:string) {
        this.logService.getLogs(type,this.CustomersData);
        return this.CustomersData;
    }

    submit(Name:string){
        console.log("taking.....");
        this.evtEmitter.emit(Name);
    }

    //eventemitter we can emit the data...




}