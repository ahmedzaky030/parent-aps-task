import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faChevronRight, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  faPencil = faPencilAlt;
  faTrash = faTrash;
  faRightChivron = faChevronRight;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  editUser(){
    const dialogRef = this.dialog.open(AddUserComponent , {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    })
  }

  deleteUser(){
    const dialogRef = this.dialog.open(ConfirmComponent , {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    })
  }

}
