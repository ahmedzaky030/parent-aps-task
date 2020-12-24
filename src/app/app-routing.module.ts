import { PageComponent } from './page/page.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UserListComponent } from './page/user-list/user-list.component';


const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'users', component: PageComponent , children:[
    { path:'list', component:UserListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
