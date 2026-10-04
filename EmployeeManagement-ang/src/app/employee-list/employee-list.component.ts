import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees!: Employee[];

  constructor(private service: EmployeeService,
              private router: Router
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.service.getEmployeeList().subscribe(res => {
      this.employees = res;
      console.log(res);
    })
  }

  updateEmployee(id: number) {
    this.router.navigate(['/update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(res => {
      console.log(res);
      this.getEmployees();
    })
  }

  employeeDetails(id: number) {
    this.router.navigate(['/employee-details', id]);
  }



}
