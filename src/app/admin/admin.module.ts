import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ContentModule } from './Components/content/content.module';
import { AddOfferComponent } from './Components/add-offer/add-offer.component';
import { ReportsComponent } from './Components/reports/reports.component';



@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent, SidebarComponent, DashboardComponent, OffersComponent, AddOfferComponent, ReportsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ContentModule
  ]
})
export class AdminModule { }
