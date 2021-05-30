import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetails().subscribe(
      res =>{
        
      },
      err =>{
        console.log("Post Error");
      }
    );
  }

}
