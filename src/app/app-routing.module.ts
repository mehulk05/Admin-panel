import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './reusable/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'admin', 
    pathMatch: 'full'
 },
  { path : 'admin', loadChildren: ()=> 
import('../app/admin/admin.module').then(mod => mod.AdminModule)},

{ path : 'auth', loadChildren: ()=> 
import('./admin/authentication/authentication.module').then(mod => mod.AuthenticationModule)},

{ path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
