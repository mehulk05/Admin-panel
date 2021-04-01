import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';


@NgModule({
  declarations: [AllOrdersComponent, PendingOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
