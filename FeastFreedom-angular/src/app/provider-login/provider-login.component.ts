import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../nav.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {

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
    
    this.router.navigate(['/providerhome']);
    this.userForm.reset();
  }

  register(){
    this.router.navigate(['/providerregister']);
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
