import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/core/models/login.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
    
  }

  onSubmit(form: FormGroup){
    if(form.valid){
      this.loginService.login(form.value).subscribe((result:{token:string}) => {
        this.toastr.success('You have logged in successfully', 'Success');
        this.loginService.loggedIn.next(true);
        localStorage.setItem('token', result.token);
        this.router.navigate(['users'])
      }, (error:{error:{error:string}}) => {
        this.toastr.error(error.error.error,'Error');
      })
    } else {
      this.toastr.warning('Please fill the missing fields', 'Warn')
    }
  }

}
