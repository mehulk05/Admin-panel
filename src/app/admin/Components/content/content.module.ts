import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { LiveVideosComponent } from './live-videos/live-videos.component';
import { RecordedVideosComponent } from './recorded-videos/recorded-videos.component';
import { PdfDocsComponent } from './pdf-docs/pdf-docs.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [LiveVideosComponent, RecordedVideosComponent, PdfDocsComponent, AddVideoComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,SharedModule,
    TooltipModule
  ]
})
export class ContentModule { }
