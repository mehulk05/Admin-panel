import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AllCatgoriesComponent } from './all-catgories/all-catgories.component';
import { CategoryTypeComponent } from './category-type/category-type.component';

const routes: Routes = [
  { path: 'add-new-category', component: AddCategoryComponent },
  { path: 'category-types', component: CategoryTypeComponent },
  { path: 'all-categories', component: AllCatgoriesComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
