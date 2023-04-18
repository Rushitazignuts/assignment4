import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoanService } from 'src/app/service/loan.service';
export interface Column {
  columnDef: string;
  header: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  getData: any;
  getLoanData: any;
  getCustomerData: any;

  displayedColumns!: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() tableColumns: Column[] = [];
  @Input() rowActionIcon!: string;

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  @Input() set loanData(data: any[]) {
    this.setLoanDataSource(data);
  }
  @Input() set CustomerData(data: any[]) {
    this.setCustomerDataSource(data);
  }
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  constructor(private loanService: LoanService) {}

  ngOnInit() {
    const name = (this.displayedColumns = this.tableColumns.map(
      (c) => c.columnDef
    ));

    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...name];
    } else {
      this.displayedColumns = name;
    }

    this.loanService.getData().subscribe((data) => {
      this.getData = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.loanService.getLoanData().subscribe((data) => {
      this.getLoanData = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.loanService.getCustomerData().subscribe((data) => {
      this.getCustomerData = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  setTableDataSource(data: any) {
    this.loanService.getData().subscribe((data) => {
      this.getData = data;

      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
    });
  }

  setLoanDataSource(data: any) {
    this.loanService.getLoanData().subscribe((data) => {
      this.getLoanData = data;

      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
    });
  }
  setCustomerDataSource(data: any) {
    this.loanService.getCustomerData().subscribe((data) => {
      this.getCustomerData = data;

      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEdit(element: any) {
    this.edit.emit(element);
  }
  onDelete(e: any) {
    this.delete.emit(e);
  }
}
