import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComboComponent } from './addForms/add-combo/add-combo.component';
import { AddCourseComponent } from './addForms/add-course/add-course.component';
import { AddEbookComponent } from './addForms/add-ebook/add-ebook.component';
import { AddSubscriptionsComponent } from './addForms/add-subscriptions/add-subscriptions.component';
import { CombosComponent } from './combos/combos.component';
import { CoursesComponent } from './courses/courses.component';
import { EbookComponent } from './ebook/ebook.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'add-course', component: AddCourseComponent},
  { path: 'add-combo', component: AddComboComponent},
  { path: 'add-ebook', component: AddEbookComponent},
  { path: 'add-subscription', component: AddSubscriptionsComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'ebook', component: EbookComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
