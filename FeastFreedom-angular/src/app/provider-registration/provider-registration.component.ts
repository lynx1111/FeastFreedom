import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../must-match.validator';
import { MatSidenav } from '@angular/material/sidenav';
import { ProviderService } from '../provider.service';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {
 public userForm;
  users;
  errorMsg;
  uf;
  navcheck: boolean;

  constructor(private fb: FormBuilder, private providerService: ProviderService, private router: Router, public nav: NavService) { }

  opened = true;
  
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
     this.nav.hide();
     this.userForm = this.fb.group({
       //id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3)]],
      confirmpass: ['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmpass')
  });
  }

  onSubmit(userForm){

    console.log(this.userForm.value);
    this.uf = this.fb.group({
      name:[this.userForm.value.name],
      email:[this.userForm.value.email],
      password:[this.userForm.value.password]
    })
    console.log(this.uf.value);
    this.providerService.postProvider(this.uf.value).subscribe(
      (data) => {
        this.users = data; 
        console.log(this.users);
        this.providerService.getProviders().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/kitchenregistration']);
    this.userForm.reset();
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
