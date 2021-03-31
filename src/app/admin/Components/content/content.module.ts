import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { LiveVideosComponent } from './live-videos/live-videos.component';
import { RecordedVideosComponent } from './recorded-videos/recorded-videos.component';
import { PdfDocsComponent } from './pdf-docs/pdf-docs.component';


@NgModule({
  declarations: [LiveVideosComponent, RecordedVideosComponent, PdfDocsComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
