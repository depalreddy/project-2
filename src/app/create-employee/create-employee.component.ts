import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ["Male"],
      dob: [''],
      dept: ['']
    });
  }
  onSubmit() {
    if (this.employeeForm.invalid) {
      return false;
    }
    // console.log(this.employeeForm.value);
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
