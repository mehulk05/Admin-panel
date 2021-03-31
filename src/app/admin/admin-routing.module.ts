import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OffersComponent } from './Components/offers/offers.component';
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
       { path : 'content', loadChildren: ()=> 
       import('./Components/content/content.module').then(mod => mod.ContentModule)},
       
        { path: 'dashboard', component: DashboardComponent },
        { path: 'offers', component: OffersComponent },
      ]
    },
  
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
