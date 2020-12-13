import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

firstTime = true;
  employeSub = new BehaviorSubject('');
  finalempData = [];
  data: any;
  constructor(private http: HttpClient, private router: Router) { }
 
  // All employee data
  getEmployee() {
    return this.http.get(environment.baseUrl + 'api/users?page=1');
  }

  // Add Employee
  addEmployee(empdata,imgBuffer) {
    this.http.post(environment.baseUrl + 'api/users', empdata).subscribe(res => {
      // console.log(res);
      if(res) {
        this.finalempData.push(res);
        this.finalempData[this.finalempData.length-1].avatar=imgBuffer;
        alert('Employee added');
      }
    }, (err) => {
      alert('Error in adding new employee');
    })
  }

  //Remove Employee
  removeEmp(ind) {
    if(ind) {
      this.finalempData.splice(ind,1)}
    alert('Employee Deleted..');
    this.router.navigateByUrl('/employees');
  }

  //Update 
  update(employee, ind) {
    console.log(employee)
    if (employee) {
      // console.log(this.finalempData[ind]);
      this.finalempData[ind].first_name = employee.first_name;
      this.finalempData[ind].id = employee.id;
      this.finalempData[ind].last_name = employee.last_name;
      this.finalempData[ind].email = employee.email;
      alert('Updated successfully..');
    }
  }

  // Current Employee data
  currentData(curerentdata, index) {
    this.data = {current: curerentdata, ind: index}
    this.employeSub.next(this.data);
  }
}
