import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

   employee: Employee = new Employee();
   id!: number;

   constructor(private service: EmployeeService,
              private router: Router,
              private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(res => {
      this.employee = res;
    }, error => {
      console.log(error);
    })
  }

  onSubmit() {
    this.service.updateEmployee(this.id, this.employee).subscribe(res => {
      this.goToEmployeeList();
    }, error => {
      console.log(error);
    })
  }

  goToEmployeeList() {
    this.router.navigateByUrl('/employees');
  }

}
