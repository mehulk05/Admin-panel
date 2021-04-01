import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { CombosComponent } from './combos/combos.component';
import { CoursesComponent } from './courses/courses.component';
import { EbookComponent } from './ebook/ebook.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'add-subscription', component: AddSubscriptionComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'ebook', component: EbookComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
