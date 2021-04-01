import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, PrivacyPolicyComponent, RefundPolicyComponent, TermsConditionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
