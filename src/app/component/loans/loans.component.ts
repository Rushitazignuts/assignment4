import { Component, OnInit, ViewChild } from '@angular/core';

import { LoanService } from '../../service/loan.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddloansComponent } from '../addloans/addloans.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface Column {
  columnDef: string;
  header: string;
}

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
})
export class LoansComponent implements OnInit {
  getLoanData: any;
  tableData: any;
  loanData: any;
  tableColumns!: Column[];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private loanService: LoanService, private dialog: MatDialog) {}
  ngOnInit() {
    this.loanData = this.loanService.getLoanData().subscribe((data: any) => {
      this.getLoanData = data;
    });
    this.initColumns();
  }
  initColumns(): void {
    this.tableColumns = [
      {
        columnDef: 'PaymentId',
        header: 'Payment Id',
      },
      {
        columnDef: 'CustomerId',
        header: 'Customer Id',
      },
      {
        columnDef: 'CustomerName',
        header: 'Customer Name',
      },
      {
        columnDef: 'Amount',
        header: 'Amount',
      },
      {
        columnDef: 'Tax',
        header: 'Tax',
      },
      {
        columnDef: 'Mode',
        header: 'Mode',
      },
      {
        columnDef: 'Date',
        header: 'Date',
      },
      {
        columnDef: 'Notes',
        header: 'Notes',
      },
    ];
  }
  openDialog() {
    this.dialog
      .open(AddloansComponent, {
        width: '50%',
        height: '50%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          location.reload()
        }
      });
  }

  editData(id: any) {
    this.dialog
      .open(AddloansComponent, {
        width: '50%',
        height: '50%',
        data: id,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          location.reload()
        }
      });
  }

  deleteData(id: number) {
    if (confirm('are you sure want to delete')) {
      this.loanService.LoanDelete(id).subscribe({
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
