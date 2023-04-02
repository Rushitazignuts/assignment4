import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import { LoanService } from './service/loan.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  getData: any;
  ngOnInit() {}
  constructor(private loanService: LoanService) {
    this.loanService.getData().subscribe((data) => {
      console.log(data);
      this.getData = data;
    });
  }
}
