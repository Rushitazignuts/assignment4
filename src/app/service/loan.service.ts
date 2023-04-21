import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private Http: HttpClient) {}
  url = 'http://localhost:3000/post/';
  loanUrl = 'http://localhost:3000/loans/';
  customerUrl = 'http://localhost:3000/Customers/';
  getData() {
    return this.Http.get<any>(this.url);
  }
  getLoanData() {
    return this.Http.get<any>(this.loanUrl);
  }
  getCustomerData() {
    return this.Http.get<any>(this.customerUrl);
  }
  postcustomerData(data: any) {
    return this.Http.post<any>(this.customerUrl, data);
  }
  loanProduct(data: any) {
    return this.Http.post<any>(this.loanUrl, data);
  }
  put(data: any, id: number) {
    return this.Http.put<any>('http://localhost:3000/loans/' + id, data);
  }
  customerPut(data: any, id: number) {
    return this.Http.put<any>('http://localhost:3000/Customers/' + id, data);
  }
  LoanDelete(id: number) {
    return this.Http.delete<any>('http://localhost:3000/loans/'+id);
  }
  CDelete(id: number) {
    return this.Http.delete<any>('http://localhost:3000/Customers/'+id);
  }
}
