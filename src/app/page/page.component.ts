import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  faAdd = faPlus;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addUser(){
    const dialogRef = this.dialog.open(AddUserComponent , {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    })
  }

}
