import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { EbookComponent } from './ebook/ebook.component';
import { CombosComponent } from './combos/combos.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';


@NgModule({
  declarations: [CoursesComponent, EbookComponent, CombosComponent, SubscriptionsComponent, AddSubscriptionComponent],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
