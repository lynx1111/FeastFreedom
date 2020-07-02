import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public userForm;
  users;
  errorMsg;
  uf;
  navcheck: boolean;

  constructor(private fb: FormBuilder, public nav: NavService ,private router: Router) { }

  opened = true;
  
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
     this.nav.hide();
     this.userForm = this.fb.group({
       
      name: ['', [Validators.required, Validators.minLength(1)]],
      password: ['',[Validators.required,Validators.minLength(3)]]
    })
  }

  onSubmit(userForm){

    console.log(this.userForm.value);
    this.uf = this.fb.group({
      name:[this.userForm.value.name],
      password:[this.userForm.value.password]
    })
    console.log(this.uf.value);
    this.nav.show();
    this.router.navigate(['/userhome']);
    this.userForm.reset();
  }

  register(){
    this.router.navigate(['/userregister']);
  }


  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmpass() {
    return this.userForm.get('confirmpass');
  }


}
