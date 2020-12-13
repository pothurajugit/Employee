import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private employeeservice: EmployeeService) { }

  imgUrl:any | ArrayBuffer = '';
  ngOnInit(): void {
  }

  // Image upload
  imageupload(file: File) {
    let imgtype = file.type.substr(file.type.indexOf('/')+1);
    console.log(typeof imgtype)
    if (imgtype === ('jpeg' || 'png' || 'svg')) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
     
  
      reader.onload = () => {
        this.imgUrl = reader.result;
      }
    } else {
      alert('Please upload an image');
      return false;
    }
  }

    // Add Employee Details
    employeData(employedata) {
      if (employedata) {
        this.employeeservice.addEmployee(employedata.value,this.imgUrl);
        // employedata.reset();
      }
    }
}
