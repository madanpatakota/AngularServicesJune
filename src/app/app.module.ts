import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentonechildComponent } from './component-one/componentonechild/componentonechild.component';
import { LogsService } from './logs.Service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentonechildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
