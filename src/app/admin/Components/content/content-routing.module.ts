import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveVideosComponent } from './live-videos/live-videos.component';
import { PdfDocsComponent } from './pdf-docs/pdf-docs.component';
import { RecordedVideosComponent } from './recorded-videos/recorded-videos.component';

const routes: Routes = [

      { path: 'live-videos', component: LiveVideosComponent },
      { path: 'recorded-videos', component: RecordedVideosComponent },
      { path: 'pdf-docs', component: PdfDocsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
