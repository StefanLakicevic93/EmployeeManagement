import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  id!: number;
  employee!: Employee;

  constructor(private route: ActivatedRoute,
              private service: EmployeeService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(res => {
      this.employee = res;
    })
  }

}
