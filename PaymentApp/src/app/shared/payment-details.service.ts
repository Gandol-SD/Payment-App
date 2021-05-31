import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService { 
  formData:PaymentDetails = new PaymentDetails();
  readonly baseUrl:string = "http://localhost:9863/api/PaymentDetails";

  constructor(private http:HttpClient) { }
  postPaymentDetail(){
    return this.http.post(this.baseUrl, this.formData)
  }
}
