import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent , FontAwesomeModule]
})
export class SharedModule { }
