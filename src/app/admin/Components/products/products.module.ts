import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { EbookComponent } from './ebook/ebook.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { CombosComponent } from './combos/combos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCourseComponent } from './addForms/add-course/add-course.component';
import { AddEbookComponent } from './addForms/add-ebook/add-ebook.component';
import { AddComboComponent } from './addForms/add-combo/add-combo.component';
import { AddSubscriptionsComponent } from './addForms/add-subscriptions/add-subscriptions.component';




@NgModule({
  declarations: [CoursesComponent, EbookComponent, SubscriptionsComponent, CombosComponent, AddCourseComponent, AddEbookComponent, AddComboComponent, AddSubscriptionsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
