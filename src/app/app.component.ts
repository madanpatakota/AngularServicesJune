import { Component } from '@angular/core';
//import { LogsService } from './logs.Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[LogsService]   
  // Here LogSErvice object has spread all over the childs of the appcomponet
})
export class AppComponent {
  title = 'AngularServicesJune';
  
  //Taking the list of objects
  
}
