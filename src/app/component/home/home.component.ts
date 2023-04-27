import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

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
  getLoanData: any;
  getCustomerData: any;
  total = 0;
  value: any;

  tableData: any;
  tableColumns!: Column[];

  constructor(private loanService: LoanService) {}
  ngOnInit() {
    this.tableData = this.loanService.getData().subscribe((data: any) => {
      this.getData = data;
    });

    this.loanService.getLoanData().subscribe((data) => {
      this.getLoanData = data;
      this.findsum(this.getLoanData);
    });

    this.loanService.getCustomerData().subscribe((data) => {
      this.getCustomerData = data;
    });

    this.initColumns();
  }
  findsum(result: any) {
    this.value = result;

    for (let j = 0; j < result.length; j++) {
      this.total += parseInt(this.value[j].Amount);
    }
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
