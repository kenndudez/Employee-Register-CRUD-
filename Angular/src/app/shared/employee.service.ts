import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
FormData : Employee;
list : Employee[];
readonly rootURL = "http://localhost:52514/api";
  constructor(private http : HttpClient) { }

  PostEmployee(FormData : Employee){
 return this.http.post(this.rootURL + '/Employees', FormData); 
  }

  GetEmployees(){
    this.http.get(this.rootURL +'/Employees')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  PutEmployee(FormData : Employee){
   return this.http.put(this.rootURL + '/Employees/'+FormData.EmployeeID,FormData);  
  }
  deleteEmployee (id: number){
return this.http.delete(this.rootURL + '/Employees/'+id);
  }
}
