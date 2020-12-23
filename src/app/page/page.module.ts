import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing';



@NgModule({
  declarations: [LoginComponent, UserListComponent, AddUserComponent, ViewUserComponent, PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
