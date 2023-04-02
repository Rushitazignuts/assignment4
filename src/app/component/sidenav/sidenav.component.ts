import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
declare var $:any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  constructor(private observer:BreakpointObserver){}
  ngAfterViewInit(){
    this.observer.observe(['(max-width:576px)']).subscribe((res)=>{
  if(res.matches){
    this.sidenav.mode='side';
    this.sidenav.close();
  
  }else{
    this.sidenav.mode="side";
    this.sidenav.open();
  }
    })
  
    }
}
