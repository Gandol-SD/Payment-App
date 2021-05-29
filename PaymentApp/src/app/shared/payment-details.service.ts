import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService { 
  formData:PaymentDetails = new PaymentDetails();
  
  constructor() { }
}
