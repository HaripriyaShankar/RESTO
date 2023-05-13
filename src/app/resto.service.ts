import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  rooturl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
  saveData(data: any) {
    console.warn('service', data);
    return this.http.post(this.url, data);
  }
  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerUser(data: any) {
    return this.http.post(this.rooturl + 'users', data);
  }
}
