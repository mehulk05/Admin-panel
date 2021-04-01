import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { LiveVideosComponent } from './live-videos/live-videos.component';
import { PdfDocsComponent } from './pdf-docs/pdf-docs.component';
import { RecordedVideosComponent } from './recorded-videos/recorded-videos.component';

const routes: Routes = [
  { path: 'add-videos', component: AddVideoComponent },
      { path: 'live-videos', component: LiveVideosComponent },
      { path: 'recorded-videos', component: RecordedVideosComponent },
      { path: 'pdf-docs', component: PdfDocsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
