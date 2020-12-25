import { Router, RouterModule } from '@angular/router';
import { IndividualConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ToastrModule , RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ LoginComponent ],
      providers:[
        {provide:LoginService , useValue:{login :()=> of({})}}
        , FormBuilder, {provide:ToastrService, useValue:toastrService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('email field validity', ()=>{
    let email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy('Expected empty email to be invalid');

    email.setValue('eve.holt@reqres.in');
    expect(email.valid).toBeTruthy('Expected filled email to be valid');
  })

  
  it('pasword field validity', ()=>{
    let password = component.loginForm.controls.paasword;
    expect(password.valid).toBeFalsy('Expected empty password to be invalid');

    password.setValue('*******');
    expect(password.valid).toBeTruthy('Expected filled password to be valid');
  })

  it('should execute LoginService.login() when form is submitted', () => {
    const loginService = TestBed.get(LoginService);
    spyOn(loginService, 'login');
    let form = new FormGroup({email:new FormControl('eve.holt@reqres.in'), password: new FormControl('****')})
    component.onSubmit(form);
    expect(loginService.login).toHaveBeenCalled();
  });
});
