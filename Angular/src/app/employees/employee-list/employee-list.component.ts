import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.GetEmployees();
  }
  populateForm(emp : Employee) {
  this.service.FormData = Object.assign({}, emp);
  }
  
  OnDelete (id: number){
  this.service.deleteEmployee(id).subscribe(res=>{
  this.service.GetEmployees();
  this.toastr.warning("Deleted Sucessfully!", 'EMP. Register');
});
  }
}
