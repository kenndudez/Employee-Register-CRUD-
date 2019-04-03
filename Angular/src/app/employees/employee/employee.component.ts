import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm) {      //making form parameter nullable 
    if (form!=null)
    form.resetForm();
    this.service.FormData = {
      EmployeeID : null,
      FullName : '',
     Position : '',
      EMPCode : '',
      Mobile : '',
    }
  } 


  onSubmit(form : NgForm) {
  this.insertRecord(form);
  }


  insertRecord(form : NgForm){
this.service.PostEmployee(form.value).subscribe(res=> {
this.toastr.success("Inserted Sucessfully!", 'EMP. Register');
this.resetForm(form)
});  //Arrow function
  }
}
