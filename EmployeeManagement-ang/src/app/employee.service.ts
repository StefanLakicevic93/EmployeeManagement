import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

const baseUrl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.http.get(baseUrl + '/employees');
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(baseUrl + '/employee', employee);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(baseUrl + `/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(baseUrl + `/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(baseUrl + `/employee/${id}`);
  }
}
