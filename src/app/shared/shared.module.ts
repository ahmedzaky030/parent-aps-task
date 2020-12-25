import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component'

@NgModule({
  declarations: [HeaderComponent, ConfirmComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[HeaderComponent , FontAwesomeModule, MatDialogModule, ConfirmComponent, FontAwesomeModule]
})
export class SharedModule { }
