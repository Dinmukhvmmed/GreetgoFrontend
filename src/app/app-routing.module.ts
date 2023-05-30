import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./data/data.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
