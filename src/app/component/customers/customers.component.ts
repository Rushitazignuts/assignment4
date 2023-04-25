import { Component, OnInit, ViewChild } from '@angular/core';

import { LoanService } from '../../service/loan.service';
import { MatDialog } from '@angular/material/dialog';
import { AddcustomersComponent } from '../addcustomers/addcustomers.component';
export interface Column {
  columnDef: string;
  header: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  getCustomerData: any;
  CustomerData: any;
  tableColumns!: Column[];

  constructor(private loanService: LoanService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.CustomerData = this.loanService
      .getCustomerData()
      .subscribe((data: any) => {
        this.getCustomerData = data;
      });
    this.initColumns();
  }
  initColumns(): void {
    this.tableColumns = [
      {
        columnDef: 'firstName',
        header: 'First Name',
      },
      {
        columnDef: 'lastName',
        header: 'Last Name',
      },
      {
        columnDef: 'loanType',
        header: 'Loan Type',
      },
      {
        columnDef: 'loanAmount',
        header: 'Loan Amount',
      },
      {
        columnDef: 'email',
        header: 'Email',
      },
      {
        columnDef: 'phone',
        header: 'Phone',
      },
      {
        columnDef: 'address',
        header: 'Address',
      },
      {
        columnDef: 'city',
        header: 'City',
      },
    ];
  }

  openDialog() {
    this.dialog
      .open(AddcustomersComponent, {
        width: '50%',
        height: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'save') {
         
        }
      });
  }
  editCustomer(id: any) {
    this.dialog
      .open(AddcustomersComponent, {
        width: '50%',
        height: '50%',
        data: id,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'update') {
          this.ngOnInit();
        }
      });
  }
  deleteCus(id: any) {
    if (confirm('are you sure want to delete')) {
      this.loanService.CDelete(id).subscribe({
        next: (res) => {
          alert('delete');
          this.ngOnInit();
        },
        error: () => {
          alert('error');
        },
      });
    }
  }
}
