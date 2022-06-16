import { Injectable } from "@angular/core";


export class LogsService{

    getLogs(Name:string, Log:any){
        console.log(Name , Log);
    }

}