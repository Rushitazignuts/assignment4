import { Component, OnInit, ViewChild } from '@angular/core';

import { LoanService } from '../../service/loan.service';
export interface Column {
  columnDef: string;
  header: string;
}
export interface Dashboard {
  id: number;
  name: string;
  type: string;
  payment: string;
  due: string;
  status: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  getData: any;
  tableData: any;
  tableColumns!: Column[];

  constructor(private loanService: LoanService) {}
  ngOnInit() {
    this.tableData = this.loanService.getData().subscribe((data: any) => {
      this.getData = data;
    });

    this.initColumns();
  }

  initColumns(): void {
    this.tableColumns = [
      {
        columnDef: 'id',
        header: 'Id',
      },
      {
        columnDef: 'name',
        header: 'Name',
      },
      {
        columnDef: 'type',
        header: 'Type',
      },
      {
        columnDef: 'payment',
        header: 'Payment',
      },
      {
        columnDef: 'due',
        header: 'Due',
      },
      {
        columnDef: 'status',
        header: 'Status',
      },
    ];
  }
}
