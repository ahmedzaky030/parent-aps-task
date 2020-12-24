import { Component, OnInit } from '@angular/core';
import { faChevronRight, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  faPencil = faPencilAlt;
  faTrash = faTrash;
  faRightChivron = faChevronRight;
  constructor() { }

  ngOnInit(): void {
  }

}
