import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeedata: any[] = [];
  currentEmployee: Object;
  loading = true;
  page = 1;
  pageSize = 8;

  constructor(private employeeservice: EmployeeService, private router: Router) { }


  ngOnInit():any {
   if(this.employeeservice.firstTime==true)  {
    this.employeeservice.getEmployee().subscribe(data => {
      if (data) {
        this.loading = false;
        this.employeeservice.firstTime = false;
        this.employeeservice.finalempData = data['data'];
        this.employeedata = data['data'];
      }
      
    });
  }else{
    this.employeedata = this.employeeservice.finalempData;
    this.loading=false
  }
   }

// Go to updateemployee
  showEmp(empdata, ind) {
    this.currentEmployee = empdata;
    //console.log(this.currentEmployee)
    if (this.currentEmployee) {
      this.employeeservice.currentData(this.currentEmployee, ind);
      this.router.navigateByUrl('/updatemployee');
    }
  }
}
