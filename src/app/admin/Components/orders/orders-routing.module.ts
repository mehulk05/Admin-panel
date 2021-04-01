import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

const routes: Routes = [
  
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: 'all-orders', component: AllOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
