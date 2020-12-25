import { UserJob } from './../../core/models/user.model';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit  {
  user: UserJob;
  faUser = faUser;
  editMode: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, 
  private dialogRef: MatDialogRef<AddUserComponent>,
  private userService: UserService,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.data){
      this.editMode = true;
      this.user = {name:`${this.data.first_name} ${this.data.last_name}`, job:''};
    } else {
      this.user = { name:'', job:''};
      this.editMode = false;
    }
  }


  submit(form: NgForm){
    if(form.valid){
      if(this.editMode){
        this.userService.updateUser(form.value).subscribe(result => {
          this.toastr.success('You have updated the user successfully', 'Success');
          this.dialogRef.close({updated: true, value:form.value})
        })
      } else {
        this.userService.createUser(form.value).subscribe(result => {
          this.toastr.success('You have created the user successfully', 'Success');
          this.dialogRef.close({created: true , value:form.value})
        })
      }
    } else {
      this.toastr.warning('Please fill the missing fields', 'Warn')
    }
  }

  close(){
    this.dialogRef.close();
  }

}
