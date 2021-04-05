import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from 'ckeditor4-angular';
import { TooltipModule } from 'ng2-tooltip-directive';




@NgModule({
  declarations: [SanitizeHtmlPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
    CKEditorModule ,
    TooltipModule
  ],
  exports:[SanitizeHtmlPipe,NgxPaginationModule,CKEditorModule]
})
export class SharedModule { }
