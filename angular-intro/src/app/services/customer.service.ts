import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {API_ENDPOINTS} from '../../environments/environment';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public info = 'test';
  private apiEndPoint = API_ENDPOINTS.customers;

  constructor(private http: HttpClient) { }

  public async get(id: number) {
    return await this.http.get<Customer>(`${this.apiEndPoint}/${id}`).pipe().toPromise();
  }

  public async getAll(): Promise<Customer[]> {
   return await this.http.get<Customer[]>(this.apiEndPoint).pipe().toPromise();
  }

  public async delete(id: number) {
    return await this.http.delete(`${this.apiEndPoint}/${id}`).toPromise();
  }

  public async add(customer: Customer) {
    return await this.http.post<Customer>(this.apiEndPoint, customer).toPromise();
  }

  public async update(customer: Customer) {
    return await this.http.put<Customer>(`${this.apiEndPoint}/${customer.id}`, customer).toPromise();
  }
}
