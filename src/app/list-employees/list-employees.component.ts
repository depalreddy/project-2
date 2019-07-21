import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  // employees: Employee[] = [
  //   {
  //     id: 123,
  //     name: 'hari',
  //     email: 'hari@gmail.com',
  //     gender: 'male',
  //     dob: '04/09/2001',
  //     dept: 'IT'

  //     // photo: "../../assets/images/2.jpg"
  //   },
  //   {
  //     id: 321,
  //     name: 'prashanth',
  //     email: 'prashanth@gmail.com',
  //     gender: 'male',
  //     dob: '04/09/1188',
  //     dept: 'Quality',
  //     // photo: "../../assets/images/3.jpg"
  //   },
  //   {
  //     id: 987,
  //     name: 'jogi',
  //     email: 'jogi@gmail.com',
  //     gender: 'male',
  //     dob: '04/09/1900',
  //     dept: 'IT/Testing',
  //     // photo: "../../assets/images/4.jpg"
  //   }
  // ];
  employees: Employee[];
  constructor(private employeeService: EmployeeService ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        console.log(data);
        this.employees = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
