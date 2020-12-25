import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe( result => this.isLoggedIn = result);
  }

}
