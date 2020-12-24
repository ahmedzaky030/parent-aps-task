import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, UserListComponent, AddUserComponent, ViewUserComponent, PageComponent],
  imports: [
    CommonModule,
    //PageRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PageModule { }
