import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './Components/add-offer/add-offer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    {
      path: '', component: MainComponent ,
      children: [
        {
          path: '', 
          redirectTo: 'dashboard', 
          pathMatch: 'full'
       },
       { path: 'add-offer', component: AddOfferComponent },
       { path : 'categories', loadChildren: ()=> 
       import('./Components/categories/categories.module').then(mod => mod.CategoriesModule)},

       { path : 'content', loadChildren: ()=> 
       import('./Components/content/content.module').then(mod => mod.ContentModule)},
       
        { path: 'dashboard', component: DashboardComponent },
        { path: 'offers', component: OffersComponent },

        { path : 'orders', loadChildren: ()=> 
        import('./Components/orders/orders.module').then(mod => mod.OrdersModule)},

        
        { path : 'pages', loadChildren: ()=> 
        import('./Components/pages/pages.module').then(mod => mod.PagesModule)},

        { path : 'products', loadChildren: ()=> 
        import('./Components/products/products.module').then(mod => mod.ProductsModule)},

        { path: 'reports', component: ReportsComponent },

        { path : 'sales', loadChildren: ()=> 
        import('./Components/sales/sales.module').then(mod => mod.SalesModule)},


        { path : 'users', loadChildren: ()=> 
        import('./Components/users/users.module').then(mod => mod.UsersModule)},
      ]
    },
  
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
