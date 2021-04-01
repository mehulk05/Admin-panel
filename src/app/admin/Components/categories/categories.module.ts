import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AllCatgoriesComponent } from './all-catgories/all-catgories.component';
import { CategoryTypeComponent } from './category-type/category-type.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AddCategoryComponent, AllCatgoriesComponent, CategoryTypeComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,SharedModule
  ]
})
export class CategoriesModule { }
