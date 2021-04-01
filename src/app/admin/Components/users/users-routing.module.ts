import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
  { path: 'add-new-user', component: AddNewUserComponent },
  { path: 'user-roles', component: UserRolesComponent },
  { path: 'all-users', component: AllUsersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
