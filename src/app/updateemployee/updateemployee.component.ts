import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  currentEmp;
  curentInd;
  btndisale = true;
  constructor(private empservice: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.empservice.employeSub.subscribe(currentdata => {
      if(currentdata) {
        this.currentEmp = currentdata;
        this.curentInd = currentdata['ind'];
      }  else {
        this.router.navigateByUrl('/employees');
      }
    }, (err) => {
      alert('Error in loading Employee');
    })
  } 

  // Remove employee
  removeEmp(current) {
    if (current) {
      this.empservice.removeEmp(current);
    }
  }

  change() {
    this.btndisale = false;
  }
  // Update Employee
  updateEmp(emp, current) {
    if(emp) {
      this.empservice.update(emp.value, current);
    }

  }

}
