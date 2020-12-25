import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { faPencilAlt, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  faPencil = faPencilAlt;
  faTrash = faTrash;
  fatimes = faTimes;

  @Input() user: User;
  @Output() onEditClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseClicked: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editItem(){
    this.onEditClicked.emit(true);
  }

  deleteItem(){
    this.onDeleteClicked.emit(true);
  }

  close(){
    this.onCloseClicked.emit(true);
  }

}
