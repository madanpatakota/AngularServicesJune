import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
