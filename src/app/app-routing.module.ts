import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';


const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path:'employees', component: EmployeesComponent},
  {path:'addemployee', component: AddemployeeComponent},
  {path:'updatemployee', component: UpdateemployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
