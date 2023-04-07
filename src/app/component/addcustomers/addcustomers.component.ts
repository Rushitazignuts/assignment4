import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss'],
})
export class AddcustomersComponent implements OnInit {
  customerForm!: FormGroup;
  getCustomerData: any;
  get firstName() {
    return this.customerForm.get('firstName');
  }
  get lastName() {
    return this.customerForm.get('lastName');
  }
  get loanType() {
    return this.customerForm.get('loanType');
  }
  get loanAmount() {
    return this.customerForm.get('loanAmount');
  }
  get email() {
    return this.customerForm.get('email');
  }
  get phone() {
    return this.customerForm.get('phone');
  }
  get address() {
    return this.customerForm.get('address');
  }
  get city() {
    return this.customerForm.get('city');
  }

  constructor(private fb: FormBuilder, private loanService: LoanService) {}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      loanType: [''],
      loanAmount: [''],
      email: [''],
      alternateEmail: [''],
      phone: [''],
      alternatePhone: [''],
      address: [''],
      address2: [''],
      city: [''],
      state: [''],
      zip: [''],
    });
  }
  onSubmit() {
    console.log(this.customerForm.value);
    this.loanService.postcustomerData(this.customerForm.value).subscribe({
      next: (res) => {
        alert('adedd');
      },
      error: () => {
        alert('error');
      },
    });
  }
}
