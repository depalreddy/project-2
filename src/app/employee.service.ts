import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  public baseUrl = 'http://localhost:4000/employee/add-employee';
  public baseUrl1 = "http://localhost:4000/employee/getEmployees";

  createEmployee(employee: any) {
    console.log(employee);
    return this.http.post(this.baseUrl, employee);
  }

  getEmployees() {
  return this.http.get(this.baseUrl1);
  }
}
