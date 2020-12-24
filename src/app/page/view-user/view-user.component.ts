import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  faPencil = faPencilAlt;
  faTrash = faTrash;
  fatimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
