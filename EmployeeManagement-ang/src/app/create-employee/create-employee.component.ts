import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private service: EmployeeService,
              private router: Router
  ) {}

  onSubmit() {
    console.log(this.employee);
    this.addEmployee();
  }

  addEmployee() {
    this.service.createEmployee(this.employee).subscribe(res => {
      console.log(res);
      this.goToEmployeeList();
    }, error => {
      console.log(error);
    })
    console.log(this.employee);
  }

  goToEmployeeList() {
    this.router.navigateByUrl('/employees');
  }

}
