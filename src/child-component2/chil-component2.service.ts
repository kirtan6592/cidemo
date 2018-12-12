import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeViewModel } from './child-component2.model';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChilComponent2Service {

  private url = 'http://localhost:57563/api/home';
  private http: HttpClient;
  constructor() { }

  public getEmployees(): Observable<EmployeeViewModel[]> {
    return this.http.get<EmployeeViewModel[]>(this.url).pipe(retry(5));
  }

  public getEmployee(id: number): Observable<EmployeeViewModel> {
    return this.http.get<EmployeeViewModel>(`${this.url}/${id}`).pipe(retry(5));
  }

  public saveEmployee(employeeViewModel: EmployeeViewModel): Observable<null> {
    const headersPara = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<null>(`${this.url}/`, employeeViewModel, { headers: headersPara }).pipe(retry(5));
  }

  public updateEmployee(employeeViewModel: EmployeeViewModel): Observable<null> {
    return this.http.put<null>(`${this.url}/` + employeeViewModel.id, employeeViewModel).pipe(retry(5));
  }

  public deleteEmployee(id: number): Observable<null> {
    return this.http.delete<null>(`${this.url}/` + id).pipe(retry(5));
  }
}
