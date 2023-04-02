import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ChartsComponent } from './component/charts/charts.component';
import { LoansComponent } from './component/loans/loans.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddcustomersComponent } from './component/addcustomers/addcustomers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'addCustomers', component: AddcustomersComponent },
  { path: 'charts', component: ChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
