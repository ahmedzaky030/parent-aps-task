import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: Login;
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginData = { email:'', password:''};
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.loginService.login(form.value).subscribe((result:{token:string}) => {
        console.log(result);
        localStorage.setItem('token', result.token);
        this.router.navigate(['users'])
      })
    }
  }

}
