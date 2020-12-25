import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private dialogRef: MatDialogRef<ConfirmComponent>) { }
  faTimes= faTimes;
  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({ok:false});
  }

  deleteItem(){
    this.dialogRef.close({ok:true})
  }

}
