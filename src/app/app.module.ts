import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import {MatButtonModule} from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
