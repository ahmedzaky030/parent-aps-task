import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faChevronRight, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from 'src/app/core/models/httpResponse.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
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
  users: User[];
  totalElements: number;
  totalPages: number;
  selectedUser: User;
  constructor(public dialog:MatDialog,
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.listUsers().subscribe((result: ApiResponse) => {
      this.users  = result.data as User[];
      this.totalPages = result.total_pages;
      this.totalElements = result.total;
    })
  }

  showUserDetails(user: User){
    this.selectedUser = user;
  }

  editUser(user: User){
    const dialogRef = this.dialog.open(AddUserComponent , {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    })
  }

  deleteUser(user: User){
    const dialogRef = this.dialog.open(ConfirmComponent , {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result.ok){
          this.userService.deleteUser(user.id).subscribe(result => {
            this.toastr.success(`${user.first_name} ${user.last_name} has been deleted successfully`,'Success');
            this.users = this.users.filter(v => v.id !== user.id );
            this.selectedUser = null;
          })
        }
    })
  }

}
