import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, UserListComponent, AddUserComponent, ViewUserComponent, PageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //PageRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PageModule { }
