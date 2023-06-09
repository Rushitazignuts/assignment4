import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoanService } from '../../service/loan.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss'],
})
export class AddcustomersComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  customerForm!: FormGroup;
  actionBtn: string = 'Save';

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    @Inject(MAT_DIALOG_DATA) public editCustomer: any,
    private dialogRef: MatDialogRef<AddcustomersComponent>
  ) {}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      loanType: ['', Validators.required],
      loanAmount: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: [''],
    });
    if (this.editCustomer) {
      this.actionBtn = 'Update';
      this.customerForm.controls['firstName'].setValue(
        this.editCustomer.firstName
      );
      this.customerForm.controls['lastName'].setValue(
        this.editCustomer.lastName
      );
      this.customerForm.controls['loanType'].setValue(
        this.editCustomer.loanType
      );
      this.customerForm.controls['loanAmount'].setValue(
        this.editCustomer.loanAmount
      );
      this.customerForm.controls['email'].setValue(this.editCustomer.email);
      this.customerForm.controls['phone'].setValue(this.editCustomer.phone);
      this.customerForm.controls['address'].setValue(this.editCustomer.address);
      this.customerForm.controls['city'].setValue(this.editCustomer.city);
    }
  }
  get m() {
    return this.customerForm.controls;
  }

  AddCustomer() {
    if (!this.editCustomer) {
      if (this.customerForm.valid) {
        this.loanService.postcustomerData(this.customerForm.value).subscribe({
          next: (res) => {
            alert('added');
            this.customerForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error');
          },
        });
      }
    } else {
      this.updateData();
    }
  }

  updateData() {
    this.loanService
      .customerPut(this.customerForm.value, this.editCustomer.id)
      .subscribe({
        next: (res) => {
          alert('Update successfully!');
          this.customerForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('error');
        },
      });
  }
}
