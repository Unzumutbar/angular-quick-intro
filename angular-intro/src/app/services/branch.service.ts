import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {API_ENDPOINTS} from '../../environments/environment';
import { Branch } from '../models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  public info = 'test';
  private apiEndPoint = API_ENDPOINTS.branches;

  constructor(private http: HttpClient) { }

  public async get(id: number) {
    return await this.http.get<Branch>(`${this.apiEndPoint}/${id}`).pipe().toPromise();
  }

  public async getAll(): Promise<Branch[]> {
    return await this.http.get<Branch[]>(this.apiEndPoint).pipe().toPromise();
  }

  public async delete(id: number) {
      return await this.http.delete(`${this.apiEndPoint}/${id}`).toPromise();
  }

  public async add(branch: Branch) {
    return await this.http.post<Branch>(this.apiEndPoint, branch).toPromise();
  }

  public async update(branch: Branch) {
    return await this.http.put<Branch>(`${this.apiEndPoint}/${branch.id}`, branch).toPromise();
  }
}
