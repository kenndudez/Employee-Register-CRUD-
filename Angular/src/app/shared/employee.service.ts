import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
FormData : Employee;
readonly rootURL = "http://localhost:52514/api";
  constructor(private http : HttpClient) { }
  PostEmployee(FormData : Employee){
 return this.http.post(this.rootURL + '/Employees', FormData); 
  }
}

