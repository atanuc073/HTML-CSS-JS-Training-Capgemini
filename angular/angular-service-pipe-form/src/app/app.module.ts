import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { PfPipe } from './pf.pipe';
import { FormsModule } from '@angular/forms';
import { EmpService } from './emp.service';
import { SearchbyPipe } from './searchby.pipe';
import { SortbyPipe } from './sortby.pipe';
import { EditempComponent } from './editemp/editemp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewempComponent,
    PfPipe,
    SearchbyPipe,
    SortbyPipe,
    EditempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // here also we can inject EmpService
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
